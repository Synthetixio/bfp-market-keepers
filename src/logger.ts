import pino from 'pino';
import { getConfig } from './config';

const config = getConfig();

export const getLogger = (name: string) =>
  pino({
    name,
    level: config.logLevel,
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
      },
    },
  });
