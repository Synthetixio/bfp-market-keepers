require('dotenv').config();

import { Address } from 'viem';
import { sepolia } from 'viem/chains';
import { getLogger } from '../logger';
import { getConfig } from '../config';
import { getBfpContracts } from '../contracts';
import { Wei } from '../wei';
import { BfpContractContext, MarketConfiguration, PendingOrder } from '../typed';
import { sleep } from '../util';

const config = getConfig();
const logger = getLogger('settlement');

const WAIT_TIME_INTERVAL_MS = 12 * 1000;
const pendingOrders: PendingOrder[] = [];
const marketConfigurations: Record<string, MarketConfiguration> = {};

const settlePendingOrders = async (
  pythPublishTimeMin: bigint,
  { BfpMarketProxy, client }: BfpContractContext
) => {
  if (pendingOrders.length === 0) {
    return;
  }

  logger.info(`Found ${pendingOrders.length} order(s) to settle`);
  for (const order of pendingOrders) {
    logger.info(`Settling order on ${order.accountId} (${order.marketId})`);
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
    wsClient.watchContractEvent({
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

          logger.info(`Found order! ${accountId} (market ${Wei.fmt(marketId)})`);
          pendingOrders.push({ accountId, marketId, commitmentTime });
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
