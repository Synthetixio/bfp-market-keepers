require('dotenv').config();

import { Address } from 'viem';
import { sepolia } from 'viem/chains';
import { EvmPriceServiceConnection } from '@pythnetwork/pyth-evm-js';
import { getLogger } from '../logger';
import { getConfig } from '../config';
import { getBfpContracts } from '../contracts';
import { Wei } from '../wei';
import { BfpContractContext, MarketConfiguration, PendingOrder } from '../typed';
import { sleep } from '../util';

const config = getConfig();
const logger = getLogger('settlement');
const pythPriceService = new EvmPriceServiceConnection(config.pythApiUrl);

const WAIT_TIME_INTERVAL_MS = 12 * 1000;

const orders: Record<string, PendingOrder> = {};
const marketConfigurations: Record<string, MarketConfiguration> = {};

const settlePendingOrders = async (
  pythPublishTimeMin: bigint,
  { BfpMarketProxy, client }: BfpContractContext
) => {
  const pendingOrders = [...Object.values(orders)];
  if (pendingOrders.length === 0) {
    return;
  }

  // TODO: Definitely wrap this up into a multicall.
  logger.info(`Found ${pendingOrders.length} order(s) to settle`);
  for (const order of pendingOrders) {
    const { accountId, marketId, commitmentTime } = order;

    const config = marketConfigurations[marketId.toString()];
    if (!config) {
      logger.error('Skipping as no market configuration can be found');
      continue;
    }

    logger.debug(`Fetching VAA from Pyth for feedId ${config.pythPriceFeedId}`);
    const minPublishTime = Number(commitmentTime + pythPublishTimeMin);
    const [priceUpdateData, publishTime] = await pythPriceService.getVaa(
      config.pythPriceFeedId,
      minPublishTime
    );

    if (publishTime >= minPublishTime) {
      logger.info(`Requirements been met. Settling order ${accountId} (${marketId})`);

      const pythUpdateDatab64 = Buffer.from(priceUpdateData, 'base64');
      const pythUpdateData = '0x' + pythUpdateDatab64.toString('hex');

      const hash = await BfpMarketProxy.OrderModule.write.settleOrder(
        [accountId, marketId, pythUpdateData as Address],
        { value: 1n }
      );
      await client.waitForTransactionReceipt({ hash });
      logger.info('Order settled! 🎉');
      delete orders[accountId.toString()];
    }
  }
};

const main = async () => {
  try {
    if (!config.pk.settlement) {
      throw new Error('Missing PK for settlement keeper');
    }

    const ctx = await getBfpContracts(sepolia, config.pk.settlement as Address);
    const { BfpMarketProxyAddress, BfpMarketProxy, account, client, wsClient } = ctx;
    const { OrderModule, MarketConfigurationModule, PerpMarketFactoryModule } = BfpMarketProxy;

    const balance = await client.getBalance({ address: account.address });
    logger.info(`Address: ${account.address} (${Wei.fmt(balance)} ETH)`);

    const { pythPublishTimeMin } = await MarketConfigurationModule.read.getMarketConfiguration();
    const bfpActiveMarketIds = await PerpMarketFactoryModule.read.getActiveMarketIds();
    for (const marketId of bfpActiveMarketIds) {
      logger.info(`Loading market (${marketId}) configuration`);
      marketConfigurations[marketId.toString()] =
        await MarketConfigurationModule.read.getMarketConfigurationById([marketId]);
    }

    logger.info('Begin listening for order commitments...');
    client.watchContractEvent({
      address: BfpMarketProxyAddress,
      abi: OrderModule.abi,
      eventName: 'OrderCommitted',
      onLogs: (logs) => {
        logs.forEach(({ args }) => {
          const { accountId, marketId, commitmentTime } = args;
          if (!accountId || !marketId || !commitmentTime) {
            logger.error('Order commitment missing critical properties');
            logger.error(args);
            return;
          }

          logger.info(`Found order! ${accountId} (market ${marketId})`);
          orders[accountId.toString()] = { accountId, marketId, commitmentTime };
        });
      },
    });

    while (true) {
      await settlePendingOrders(pythPublishTimeMin, ctx);
      await sleep(WAIT_TIME_INTERVAL_MS);
    }
  } catch (err) {
    logger.error(err);
  }
};

main();
