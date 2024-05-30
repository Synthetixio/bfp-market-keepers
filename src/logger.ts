import { map } from 'lodash';
import winston from 'winston';

export const getLogger = (label: string) =>
  winston.createLogger({
    level: process.env.LOG_LEVEL ?? 'info',
    format: winston.format.combine(
      winston.format.label({ label }),
      winston.format.timestamp(),
      winston.format.printf(({ timestamp, level, label, component, message, args }) => {
        const argsMessage = map(args, (value, key) => `${key}=${value}`).join(' ');
        return [timestamp, level, label, component, message, argsMessage]
          .filter((x) => !!x)
          .join(' ');
      })
    ),
    transports: [new winston.transports.Console()],
  });
