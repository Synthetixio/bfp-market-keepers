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

const logger = getLogger('contracts');

export const getBfpContracts = async (chain: Chain, pk: Address, rpcUrl: string) => {
  const transport = http(rpcUrl);

  const publicClient = createPublicClient({ chain, transport });
  const account = privateKeyToAccount(pk);
  const wallet = createWalletClient({ chain, transport, account });
  const client = { public: publicClient, wallet };

  const BfpMarketProxyAddress = Deployments.BfpMarketProxy.address;
  const PerpMarketFactoryModule = getContract({
    address: BfpMarketProxyAddress,
    abi: Deployments.PerpMarketFactoryModule.abi,
    client,
  });
  const AccountModule = getContract({
    address: BfpMarketProxyAddress,
    abi: Deployments.AccountModule.abi,
    client,
  });
  const accountTokenModuleAddress = await AccountModule.read.getAccountTokenAddress();
  const AccountTokenModule = getContract({
    address: accountTokenModuleAddress,
    abi: Deployments.AccountTokenModule.abi,
    client,
  });
  const PerpAccountModule = getContract({
    address: BfpMarketProxyAddress,
    abi: Deployments.PerpAccountModule.abi,
    client,
  });
  const MarginModule = getContract({
    address: BfpMarketProxyAddress,
    abi: Deployments.MarginModule.abi,
    client,
  });
  const OrderModule = getContract({
    address: BfpMarketProxyAddress,
    abi: Deployments.OrderModule.abi,
    client,
  });

  return {
    BfpMarketProxyAddress,
    BfpMarketProxy: {
      PerpMarketFactoryModule,
      AccountModule,
      AccountTokenModule,
      PerpAccountModule,
      MarginModule,
      OrderModule,
    },
    client: publicClient,
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
