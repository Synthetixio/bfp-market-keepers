import {
  Address,
  Chain,
  createPublicClient,
  createWalletClient,
  fromHex,
  getContract,
  http,
} from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { Deployments } from './deployments/synthetix-bfp-market_1.0.0-alpha.2';
import { getLogger } from './logger';
import type { BfpContractContext } from './typed';
import { getConfig } from './config';

const config = getConfig();
const logger = getLogger('contracts');

export const getBfpContracts = async (chain: Chain, pk: Address) => {
  const client = createPublicClient({ chain, transport: http(config.rpc.http) });
  const wsClient = createPublicClient({ chain, transport: http(config.rpc.ws) });
  const account = privateKeyToAccount(pk);
  const wallet = createWalletClient({ chain, transport: http(config.rpc.http), account });

  const BfpMarketProxyAddress = Deployments.BfpMarketProxy.address;
  const getContractArgs = { address: BfpMarketProxyAddress, client: { public: client, wallet } };

  const PerpMarketFactoryModule = getContract({
    ...getContractArgs,
    abi: Deployments.PerpMarketFactoryModule.abi,
  });
  const MarketConfigurationModule = getContract({
    ...getContractArgs,
    abi: Deployments.MarketConfigurationModule.abi,
  });
  const AccountModule = getContract({
    ...getContractArgs,
    abi: Deployments.AccountModule.abi,
  });
  const accountTokenModuleAddress = await AccountModule.read.getAccountTokenAddress();
  const AccountTokenModule = getContract({
    address: accountTokenModuleAddress,
    abi: Deployments.AccountTokenModule.abi,
    client: { public: client, wallet },
  });
  const PerpAccountModule = getContract({
    ...getContractArgs,
    abi: Deployments.PerpAccountModule.abi,
  });
  const MarginModule = getContract({
    ...getContractArgs,
    abi: Deployments.MarginModule.abi,
  });
  const OrderModule = getContract({
    ...getContractArgs,
    abi: Deployments.OrderModule.abi,
  });

  return {
    BfpMarketProxyAddress,
    BfpMarketProxy: {
      PerpMarketFactoryModule,
      MarketConfigurationModule,
      AccountModule,
      AccountTokenModule,
      PerpAccountModule,
      MarginModule,
      OrderModule,
    },
    client,
    wsClient,
    wallet,
    account,
  };
};

export const getBfpMarketId = async ({ BfpMarketProxy }: BfpContractContext) => {
  const { PerpMarketFactoryModule } = BfpMarketProxy;
  const bfpActiveMarketIds = await PerpMarketFactoryModule.read.getActiveMarketIds();
  if (bfpActiveMarketIds.length === 0) {
    throw new Error('No active markets found');
  }
  logger.info(
    `Active BFP markets found (${bfpActiveMarketIds.length}): [${bfpActiveMarketIds.join(',')}]`
  );

  const marketId = bfpActiveMarketIds[0];
  const { name: marketName } = await PerpMarketFactoryModule.read.getMarketDigest([marketId]);

  logger.info(`Using marketId: ${marketId} (${fromHex(marketName, 'string')} Market)`);
  return marketId;
};
