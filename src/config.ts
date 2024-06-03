import { z } from 'zod';

export const DEFAULT_CONFIG = {
  logLevel: 'info',
};

export const AppConfigSchema = z.object({
  logLevel: z.string().default(DEFAULT_CONFIG.logLevel),
  privateKey: z.string().startsWith('0x'),
  rpcUrl: z.string().url(),
});

export type AppConfig = z.infer<typeof AppConfigSchema>;

let _config: AppConfig | undefined;

export const getConfig = (hardRefresh = false): AppConfig => {
  if (_config && !hardRefresh) {
    return _config;
  }

  const result = AppConfigSchema.safeParse({
    logLevel: process.env.LOG_LEVEL,
    privateKey: process.env.PRIVATE_KEY,
    rpcUrl: process.env.RPC_URL,
  });

  if (!result.success) {
    throw result.error;
  }

  _config = result.data;
  return _config;
};
