require('dotenv').config();

import { createPublicClient, fromHex, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { sepolia } from 'viem/chains';
import { Deployments } from './deployments/synthetix-bfp-market_1.0.0-alpha.2';
import { getLogger } from './logger';
import { getConfig } from './config';

const main = async () => {
  const config = getConfig();
  const logger = getLogger('main');

  const client = createPublicClient({
    chain: sepolia,
    transport: http(),
  });
  const account = privateKeyToAccount(config.privateKey as `0x{string}`);

  logger.info(`keeper address: '${account.address}'`);

  const ProxyAddress = Deployments.BfpMarketProxy.address;
  const bfpActiveMarketIds = await client.readContract({
    address: ProxyAddress,
    abi: Deployments.PerpMarketFactoryModule.abi,
    functionName: 'getActiveMarketIds',
  });
  if (bfpActiveMarketIds.length === 0) {
    logger.error('no active markets found');
    return;
  }
  logger.info(`active bfp markets found: [${bfpActiveMarketIds.join(',')}]`);

  const marketId = bfpActiveMarketIds[0];
  const marketDigest = await client.readContract({
    address: ProxyAddress,
    abi: Deployments.PerpMarketFactoryModule.abi,
    functionName: 'getMarketDigest',
    args: [marketId],
  });

  logger.info(`using first marketId: '${marketId}' (${fromHex(marketDigest.name, 'string')})`);
};

main();
