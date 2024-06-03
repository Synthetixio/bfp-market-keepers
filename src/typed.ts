import type { getBfpContracts } from './contracts';

export type AwaitedOneLevel<T> = T extends Promise<infer U> ? U : T;
export type BfpContractContext = AwaitedOneLevel<ReturnType<typeof getBfpContracts>>;

export type PendingOrder = {
  accountId: bigint;
  marketId: bigint;
  commitmentTime: bigint;
};
