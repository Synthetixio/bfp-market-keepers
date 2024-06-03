import type { getBfpContracts } from './contracts';

export type AwaitedOneLevel<T> = T extends Promise<infer U> ? U : T;
export type BfpContractContext = AwaitedOneLevel<ReturnType<typeof getBfpContracts>>;
