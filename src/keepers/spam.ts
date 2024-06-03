require('dotenv').config();

import { erc20Abi, fromHex, getContract } from 'viem';
import { sepolia } from 'viem/chains';
import { getLogger } from '../logger';
import { getConfig } from '../config';
import { getBfpMarketProxy } from '../contracts';
import { MIN_MARGIN_USD } from '../constants';
import { Wei } from '../wei';
import { oneOf, sleep } from '../util';

const config = getConfig();
const logger = getLogger('spam');

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
  { BfpMarketProxy, ProxyAddress, client, wallet, account }: Ctx
) => {
  const { MarginModule, PerpAccountModule } = BfpMarketProxy;

  const { marginUsd } = await MarginModule.read.getMarginDigest([accountId, marketId]);
  if (marginUsd >= MIN_MARGIN_USD) {
    logger.info(`Proceeding with sufficient margin $${Wei.fmt(marginUsd)}`);
    return;
  }

  logger.info(`Margin $${Wei.fmt(marginUsd)} below min $${Wei.fmt(MIN_MARGIN_USD)}`);

  const marginUsdDelta = Wei.mul(MIN_MARGIN_USD - marginUsd, Wei.toWei(1.01));
  const remMarginUsd = marginUsdDelta;
  let cumMarginUsd = 0n;

  logger.info(`Attempting to deposit $${Wei.fmt(marginUsdDelta)} worth of collateral`);

  const { depositedCollaterals } = await PerpAccountModule.read.getAccountDigest([
    accountId,
    marketId,
  ]);

  for (const { collateralAddress, oraclePrice } of depositedCollaterals) {
    if (cumMarginUsd >= MIN_MARGIN_USD) {
      logger.info('Sufficient deposited margin has been achieved');
      return;
    }

    const ERC20Contract = getContract({
      address: collateralAddress,
      abi: erc20Abi,
      client: { public: client, wallet },
    });
    const [symbol, balanceOf, allowance] = await Promise.all([
      ERC20Contract.read.symbol(),
      ERC20Contract.read.balanceOf([account.address]),
      ERC20Contract.read.allowance([account.address, ProxyAddress]),
    ]);

    if (balanceOf === 0n) {
      logger.info(`Found ${symbol}.balanceOf=0 skipping ($0)`);
      continue;
    }

    const p = Wei.div(remMarginUsd, Wei.mul(balanceOf, oraclePrice));
    const size = Wei.mul(p, balanceOf);
    const depositUsd = Wei.mul(size, oraclePrice);

    logger.info(`Found ${symbol}.balanceOf==${Wei.fmt(balanceOf)} ($${Wei.fmt(oraclePrice)})`);
    logger.info(`BfpMarket.deposit(${symbol},${Wei.fmt(size)}) $${Wei.fmt(depositUsd)}`);

    if (allowance < size) {
      const hash = await ERC20Contract.write.approve([ProxyAddress, size]);
      await client.waitForTransactionReceipt({ hash });
    }

    const hash = await MarginModule.write.modifyCollateral([
      accountId,
      marketId,
      collateralAddress,
      size,
    ]);
    await client.waitForTransactionReceipt({ hash });

    cumMarginUsd += depositUsd;
  }

  if (cumMarginUsd === 0n) {
    throw new Error('Unable to proceed due to insufficient margin');
  }
};

const hamspamspecial = async (
  accountId: bigint,
  marketId: bigint,
  { BfpMarketProxy, client }: Ctx
) => {
  const { PerpAccountModule, OrderModule, MarginModule } = BfpMarketProxy;

  const order = await OrderModule.read.getOrderDigest([accountId, marketId]);
  if (order.sizeDelta !== 0n) {
    if (order.isStale) {
      logger.info(`Stale order found with size=${Wei.fmt(order.sizeDelta)}`);
      const hash = await OrderModule.write.cancelStaleOrder([accountId, marketId]);
      await client.waitForTransactionReceipt({ hash, confirmations: 1 });
    } else {
      if (order.isReady) {
        logger.info('Order ready for settlement. Waiting for keeper');
      } else {
        logger.info('Order pending settlement... waiting');
      }
      return;
    }
  }

  const position = await PerpAccountModule.read.getPositionDigest([accountId, marketId]);
  if (position.size !== 0n) {
    logger.info(`Found position of size=${Wei.fmt(position.size)}`);

    const sizeDelta = Wei.mul(position.size, Wei.toWei(-1));
    const fillPrice = await OrderModule.read.getFillPrice([marketId, sizeDelta]);
    const limitPrice = Wei.mul(fillPrice, sizeDelta > 0 ? Wei.toWei(1.05) : Wei.toWei(0.95));

    logger.info(`Closing position with size ${Wei.fmt(sizeDelta)} ($${Wei.fmt(limitPrice)} limit)`);
    const hash = await OrderModule.write.commitOrder([
      accountId,
      marketId,
      sizeDelta,
      limitPrice,
      0n,
      [],
    ]);
    await client.waitForTransactionReceipt({ hash, confirmations: 1 });
  }

  const { discountedMarginUsd } = await MarginModule.read.getMarginDigest([accountId, marketId]);

  const LEVERAGE_OPTIONS = [0.25, 0.5, 0.75, 1, 1.5, 2, 2.5, 3];
  const leverage = Wei.toWei(oneOf(LEVERAGE_OPTIONS));

  const marginUsageUsd = Wei.mul(discountedMarginUsd, leverage);
  const oraclePrice = await OrderModule.read.getOraclePrice([marketId]);
  const sizeDelta = Wei.div(marginUsageUsd, oraclePrice);
  const fillPrice = await OrderModule.read.getFillPrice([marketId, sizeDelta]);
  const limitPrice = Wei.mul(fillPrice, sizeDelta > 0 ? Wei.toWei(1.05) : Wei.toWei(0.95));

  logger.info(
    `New order size ${Wei.fmt(sizeDelta)} ($${Wei.fmt(limitPrice)} limit ${Wei.fmt(leverage)}x)`
  );
  const hash = await OrderModule.write.commitOrder([
    accountId,
    marketId,
    sizeDelta,
    limitPrice,
    0n,
    [],
  ]);
  await client.waitForTransactionReceipt({ hash, confirmations: 1 });
};

const main = async () => {
  try {
    const ctx = await getBfpMarketProxy(sepolia, config.privateKey as `0x${string}`, config.rpcUrl);
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

    // Spam the BfpMarket with deposits, orders, cancelations, etc.
    while (true) {
      await depositMargin(accountId, marketId, ctx);
      await hamspamspecial(accountId, marketId, ctx);

      logger.info('Waiting...');
      await sleep(12 * 1000);
    }
  } catch (err) {
    logger.error(err);
  }
};

main();
