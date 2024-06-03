require('dotenv').config();

import { Address, erc20Abi, getContract } from 'viem';
import { sepolia } from 'viem/chains';
import { getLogger } from '../logger';
import { getConfig } from '../config';
import { getBfpContracts, getBfpMarketId } from '../contracts';
import { MIN_MARGIN_USD } from '../constants';
import { Wei } from '../wei';
import { oneOf, sleep } from '../util';
import type { BfpContractContext } from '../typed';

const config = getConfig();
const logger = getLogger('spam');

const WAIT_TIME_INTERVAL_MS = 12 * 1000;

const getOrCreateAccount = async ({ BfpMarketProxy, client, account }: BfpContractContext) => {
  const accountNftBalanceOf = await BfpMarketProxy.AccountTokenModule.read.balanceOf([
    account.address,
  ]);
  if (accountNftBalanceOf === 0n) {
    logger.info('No account found. Creating new BFP NFT account');
    const hash = await BfpMarketProxy.AccountModule.write.createAccount();
    await client.waitForTransactionReceipt({ hash });
  }

  const accountId = await BfpMarketProxy.AccountTokenModule.read.tokenOfOwnerByIndex([
    account.address,
    0n,
  ]);
  logger.info(`Using accountId: ${accountId}`);

  return accountId;
};

const depositMargin = async (
  accountId: bigint,
  marketId: bigint,
  { BfpMarketProxy, BfpMarketProxyAddress, client, wallet, account }: BfpContractContext
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
      ERC20Contract.read.allowance([account.address, BfpMarketProxyAddress]),
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
      const hash = await ERC20Contract.write.approve([BfpMarketProxyAddress, size]);
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

const hamSpamwichSpecial = async (
  accountId: bigint,
  marketId: bigint,
  { BfpMarketProxy, client }: BfpContractContext
) => {
  const { PerpAccountModule, OrderModule, MarginModule } = BfpMarketProxy;

  const order = await OrderModule.read.getOrderDigest([accountId, marketId]);
  if (order.sizeDelta !== 0n) {
    if (order.isStale) {
      logger.info(`Cancelling stale order of size ${Wei.fmt(order.sizeDelta)}`);
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
    if (!config.pk.spam) {
      throw new Error('Missing PK for spam keeper');
    }

    const ctx = await getBfpContracts(sepolia, config.pk.spam as Address, config.rpcUrl);
    const { account, client } = ctx;

    const balance = await client.getBalance({ address: account.address });
    logger.info(`Address: ${account.address} (${Wei.fmt(balance)} ETH)`);

    const marketId = await getBfpMarketId(ctx);
    const accountId = await getOrCreateAccount(ctx);

    // Spam the BfpMarket with deposits, orders, cancelations, etc.
    while (true) {
      await depositMargin(accountId, marketId, ctx);
      await hamSpamwichSpecial(accountId, marketId, ctx);

      logger.info(`Waiting ${WAIT_TIME_INTERVAL_MS}ms...`);
      await sleep(WAIT_TIME_INTERVAL_MS);
    }
  } catch (err) {
    logger.error(err);
  }
};

main();
