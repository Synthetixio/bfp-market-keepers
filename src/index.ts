require('dotenv').config();

import { erc20Abi, fromHex, getContract } from 'viem';
import { sepolia } from 'viem/chains';
import { getLogger } from './logger';
import { getConfig } from './config';
import { getBfpMarketProxy } from './contracts';
import { MIN_MARGIN_USD } from './constants';
import { Wei } from './wei';

const config = getConfig();
const logger = getLogger('main');

type AwaitedOneLevel<T> = T extends Promise<infer U> ? U : T;

export type Ctx = AwaitedOneLevel<ReturnType<typeof getBfpMarketProxy>>;

const getOrCreateAccount = async ({ BfpMarketProxy, client, account }: Ctx) => {
  const accountNftBalanceOf = await BfpMarketProxy.AccountTokenModule.read.balanceOf([
    account.address,
  ]);
  if (accountNftBalanceOf === 0n) {
    logger.info('No account found. Creating new BFP NFT account');
    const hash = await BfpMarketProxy.AccountModule.write.createAccount();
    await client.waitForTransactionReceipt({ hash });
  }
  return BfpMarketProxy.AccountTokenModule.read.tokenOfOwnerByIndex([account.address, 0n]);
};

const depositMargin = async (
  accountId: bigint,
  marketId: bigint,
  { BfpMarketProxy, client, wallet, account }: Ctx
) => {
  const { marginUsd } = await BfpMarketProxy.MarginModule.read.getMarginDigest([
    accountId,
    marketId,
  ]);

  if (marginUsd <= MIN_MARGIN_USD) {
    logger.info(`Margin $${Wei.fmt(marginUsd)} below min $${Wei.fmt(MIN_MARGIN_USD)}`);

    const marginUsdDelta = Wei.mul(MIN_MARGIN_USD - marginUsd, Wei.toWei(1.05));
    const remMarginUsd = marginUsdDelta;
    const cumMarginUsd = 0n;

    logger.info(`Attempting to deposit $${Wei.fmt(marginUsdDelta)}`);

    const { depositedCollaterals } = await BfpMarketProxy.PerpAccountModule.read.getAccountDigest([
      accountId,
      marketId,
    ]);

    for (const { collateralAddress, oraclePrice } of depositedCollaterals) {
      const ERC20Contract = getContract({
        address: collateralAddress,
        abi: erc20Abi,
        client: { public: client, wallet },
      });
      const [symbol, balanceOf] = await Promise.all([
        ERC20Contract.read.symbol(),
        ERC20Contract.read.balanceOf([account.address]),
      ]);

      if (balanceOf === 0n) {
        logger.info(`ERC20(${symbol}).balanceOf=0`);
        continue;
      }

      const p = Wei.div(remMarginUsd, Wei.mul(balanceOf, oraclePrice));
      const size = Wei.mul(p, balanceOf);
      const depositUsd = Wei.fmt(Wei.mul(size, oraclePrice));

      logger.info(`ERC20(${symbol}).balanceOf=${Wei.fmt(balanceOf)} ($${Wei.fmt(oraclePrice)})`);
      logger.info(
        `ERC20(${symbol}).transfer(trader, BfpMarketProxy, ${Wei.fmt(size)}) $${depositUsd}`
      );

      // BfpMarketProxy.MarginModule.write.modifyCollateral([accountId, marketId]);
    }

    if (cumMarginUsd === 0n) {
      throw new Error('Unable to proceed due to insufficient margin');
    }
  } else {
    logger.info(`Proceeding with sufficient margin: ${Wei.fmt(marginUsd)}`);
  }
};

const main = async () => {
  try {
    const ctx = await getBfpMarketProxy(sepolia, config.privateKey as `0x${string}`);
    const { BfpMarketProxy, account } = ctx;
    logger.info(`Trader address: ${account.address}`);

    const bfpActiveMarketIds =
      await BfpMarketProxy.PerpMarketFactoryModule.read.getActiveMarketIds();
    if (bfpActiveMarketIds.length === 0) {
      throw new Error('No active markets found');
    }
    logger.info(`Active BFP markets found: [${bfpActiveMarketIds.join(',')}]`);

    const marketId = bfpActiveMarketIds[0];
    const { name: marketName } = await BfpMarketProxy.PerpMarketFactoryModule.read.getMarketDigest([
      marketId,
    ]);
    logger.info(`Using marketId: ${marketId} (${fromHex(marketName, 'string')})`);

    const accountId = await getOrCreateAccount(ctx);
    logger.info(`Using accountId: ${accountId}`);

    await depositMargin(accountId, marketId, ctx);
  } catch (err) {
    logger.error(err);
  }
};

main();
