require('dotenv').config();

import { Address } from 'viem';
import { sepolia } from 'viem/chains';
import { getLogger } from '../logger';
import { getConfig } from '../config';
import { getBfpContracts, getBfpMarketId } from '../contracts';
import { Wei } from '../wei';

const config = getConfig();
const logger = getLogger('settlement');

const main = async () => {
  try {
    if (!config.pk.settlement) {
      throw new Error('Missing PK for settlement keeper');
    }

    const ctx = await getBfpContracts(sepolia, config.pk.settlement as Address, config.rpcUrl);
    const { account, client } = ctx;

    const balance = await client.getBalance({ address: account.address });
    logger.info(`Address: ${account.address} (${Wei.fmt(balance)} ETH)`);

    const marketId = await getBfpMarketId(ctx);
  } catch (err) {
    logger.error(err);
  }
};

main();
