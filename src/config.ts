import { z } from 'zod';

export const DEFAULT_CONFIG = {
  logLevel: 'info',
};

export const AppConfigSchema = z.object({
  logLevel: z.string().default(DEFAULT_CONFIG.logLevel),
  pk: z.object({
    spam: z.string().startsWith('0x').optional(),
    settlement: z.string().startsWith('0x').optional(),
  }),
  rpc: z.object({
    http: z.string().url(),
    ws: z.string().url(),
  }),
});

export type AppConfig = z.infer<typeof AppConfigSchema>;

let _config: AppConfig | undefined;

export const getConfig = (hardRefresh = false): AppConfig => {
  if (_config && !hardRefresh) {
    return _config;
  }

  const result = AppConfigSchema.safeParse({
    logLevel: process.env.LOG_LEVEL,
    pk: {
      spam: process.env.PK_SPAM,
      settlement: process.env.PK_SETTLEMENT,
    },
    rpc: {
      http: process.env.RPC_URL_HTTP,
      ws: process.env.RPC_URL_WS,
    },
  });

  if (!result.success) {
    throw result.error;
  }

  _config = result.data;
  return _config;
};
