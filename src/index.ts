require('dotenv').config();

import { erc20Abi, formatUnits, fromHex, getContract } from 'viem';
import { sepolia } from 'viem/chains';
import { getLogger } from './logger';
import { getConfig } from './config';
import { getBfpMarketProxy } from './contracts';
import { MIN_MARGIN_USD } from './constants';

const config = getConfig();
const logger = getLogger('main');

export type Ctx = Awaited<ReturnType<typeof getBfpMarketProxy>>;

const getAccountId = async ({ BfpMarketProxy, client, account }: Ctx) => {
  const accountNftBalanceOf = await BfpMarketProxy.AccountTokenModule.read.balanceOf([
    account.address,
  ]);
  if (accountNftBalanceOf === 0n) {
    logger.info('BFP NFT account not found, creating...');
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
  const marginDigest = await BfpMarketProxy.MarginModule.read.getMarginDigest([
    accountId,
    marketId,
  ]);
  const marginUsd = formatUnits(marginDigest.marginUsd, 18);
  if (marginDigest.marginUsd <= MIN_MARGIN_USD) {
    logger.info(`Margin of $${marginUsd} below minimum $${formatUnits(MIN_MARGIN_USD, 18)}`);
    logger.info('Depositing margin...');

    const requiredMarginUsdDelta = MIN_MARGIN_USD - marginDigest.marginUsd;
    logger.info(`Attempting to deposit USD delta $${formatUnits(requiredMarginUsdDelta, 18)}`);

    const accountDigest = await BfpMarketProxy.PerpAccountModule.read.getAccountDigest([
      accountId,
      marketId,
    ]);
    const cumMarginUsd = marginDigest.marginUsd;

    for (const deposited of accountDigest.depositedCollaterals) {
      const ERC20Contract = getContract({
        address: deposited.collateralAddress,
        abi: erc20Abi,
        client: { public: client, wallet },
      });
      const [name, balanceOf] = await Promise.all([
        ERC20Contract.read.name(),
        ERC20Contract.read.balanceOf([account.address]),
      ]);

      if (balanceOf === 0n) {
        logger.info(`Zero balance found '${name}'`);
        continue;
      }

      logger.info(`Depositing '${name}' to margin (${formatUnits(balanceOf, 18)} found)`);
    }

    if (cumMarginUsd === 0n) {
      throw new Error('Unable to proceed insufficient margin');
    }
  } else {
    logger.info(`Proceeding with sufficient margin: $${marginUsd} `);
  }
};

const main = async () => {
  try {
    const ctx = await getBfpMarketProxy(sepolia, config.privateKey as `0x${string}`);
    const { BfpMarketProxy, account } = ctx;
    logger.info(`Keeper address: ${account.address}`);

    const bfpActiveMarketIds =
      await BfpMarketProxy.PerpMarketFactoryModule.read.getActiveMarketIds();
    if (bfpActiveMarketIds.length === 0) {
      throw new Error('No active markets found');
    }
    logger.info(`Active BFP markets found: [${bfpActiveMarketIds.join(',')}]`);

    const marketId = bfpActiveMarketIds[0];
    const marketDigest = await BfpMarketProxy.PerpMarketFactoryModule.read.getMarketDigest([
      marketId,
    ]);
    logger.info(`Using marketId: ${marketId} (${fromHex(marketDigest.name, 'string')})`);

    const accountId = await getAccountId(ctx);
    logger.info(`Using accountId: ${accountId}`);

    await depositMargin(accountId, marketId, ctx);
  } catch (err) {
    logger.error(err);
  }
};

main();
