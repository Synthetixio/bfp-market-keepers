require('dotenv').config();

import { sepolia } from 'viem/chains';
import { getLogger } from '../logger';
import { getConfig } from '../config';
import { getBfpContracts } from '../contracts';

const config = getConfig();
const logger = getLogger('settlement');

const main = async () => {
  try {
    const ctx = await getBfpContracts(sepolia, config.privateKey as `0x${string}`, config.rpcUrl);
  } catch (err) {
    logger.error(err);
  }
};

main();
