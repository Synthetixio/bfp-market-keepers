import { Chain, createPublicClient, createWalletClient, getContract, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { Deployments } from './deployments/synthetix-bfp-market_1.0.0-alpha.2';

export const getBfpMarketProxy = async (
  chain: Chain,
  privateKey: `0x${string}`,
  rpcUrl: string
) => {
  const transport = http(rpcUrl);
  const publicClient = createPublicClient({ chain, transport });
  const account = privateKeyToAccount(privateKey);
  const wallet = createWalletClient({ chain, transport, account });
  const client = { public: publicClient, wallet };

  const ProxyAddress = Deployments.BfpMarketProxy.address;
  const PerpMarketFactoryModule = getContract({
    address: ProxyAddress,
    abi: Deployments.PerpMarketFactoryModule.abi,
    client,
  });
  const AccountModule = getContract({
    address: ProxyAddress,
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
    address: ProxyAddress,
    abi: Deployments.PerpAccountModule.abi,
    client,
  });
  const MarginModule = getContract({
    address: ProxyAddress,
    abi: Deployments.MarginModule.abi,
    client,
  });
  const OrderModule = getContract({
    address: ProxyAddress,
    abi: Deployments.OrderModule.abi,
    client,
  });

  return {
    ProxyAddress,
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
