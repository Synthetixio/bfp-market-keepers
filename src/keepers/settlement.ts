require('dotenv').config();

import { Address } from 'viem';
import { sepolia } from 'viem/chains';
import { getLogger } from '../logger';
import { getConfig } from '../config';
import { getBfpContracts } from '../contracts';
import { Wei } from '../wei';
import { BfpContractContext, PendingOrder } from '../typed';
import { sleep } from '../util';

const config = getConfig();
const logger = getLogger('settlement');

const WAIT_TIME_INTERVAL_MS = 12 * 1000;
const pendingOrders: PendingOrder[] = [];

const settlePendingOrders = async (
  pythPublishTimeMin: bigint,
  { BfpMarketProxy, client }: BfpContractContext
) => {
  if (pendingOrders.length === 0) {
    return;
  }

  for (const order of pendingOrders) {
    logger.info(`Settling order on ${order.accountId} (${order.marketId})`);
  }
};

const main = async () => {
  try {
    if (!config.pk.settlement) {
      throw new Error('Missing PK for settlement keeper');
    }

    const ctx = await getBfpContracts(sepolia, config.pk.settlement as Address, config.rpcUrl);
    const { BfpMarketProxyAddress, BfpMarketProxy, account, client } = ctx;

    const balance = await client.getBalance({ address: account.address });
    logger.info(`Address: ${account.address} (${Wei.fmt(balance)} ETH)`);

    logger.info('Listening for order commitments...');
    client.watchContractEvent({
      address: BfpMarketProxyAddress,
      abi: BfpMarketProxy.OrderModule.abi,
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

    const { pythPublishTimeMin } =
      await BfpMarketProxy.MarketConfigurationModule.read.getMarketConfiguration();

    while (true) {
      await settlePendingOrders(pythPublishTimeMin, ctx);

      logger.info(`Waiting ${WAIT_TIME_INTERVAL_MS}ms...`);
      await sleep(WAIT_TIME_INTERVAL_MS);
    }
  } catch (err) {
    logger.error(err);
  }
};

main();
