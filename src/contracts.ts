import { Chain, createPublicClient, createWalletClient, getContract, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { Deployments } from './deployments/synthetix-bfp-market_1.0.0-alpha.2';

export const getBfpMarketProxy = async (chain: Chain, privateKey: `0x${string}`) => {
  const client = createPublicClient({ chain, transport: http() });
  const account = privateKeyToAccount(privateKey);
  const wallet = createWalletClient({ chain, transport: http(), account });

  const ProxyAddress = Deployments.BfpMarketProxy.address;
  const PerpMarketFactoryModule = getContract({
    address: ProxyAddress,
    abi: Deployments.PerpMarketFactoryModule.abi,
    client: { public: client, wallet },
  });
  const AccountModule = getContract({
    address: ProxyAddress,
    abi: Deployments.AccountModule.abi,
    client: { public: client, wallet },
  });
  const accountTokenModuleAddress = await AccountModule.read.getAccountTokenAddress();
  const AccountTokenModule = getContract({
    address: accountTokenModuleAddress,
    abi: Deployments.AccountTokenModule.abi,
    client: { public: client, wallet },
  });
  const PerpAccountModule = getContract({
    address: ProxyAddress,
    abi: Deployments.PerpAccountModule.abi,
    client: { public: client, wallet },
  });
  const MarginModule = getContract({
    address: ProxyAddress,
    abi: Deployments.MarginModule.abi,
    client: { public: client, wallet },
  });

  return {
    BfpMarketProxy: {
      PerpMarketFactoryModule,
      AccountModule,
      AccountTokenModule,
      PerpAccountModule,
      MarginModule,
    },
    client,
    wallet,
    account,
  };
};
