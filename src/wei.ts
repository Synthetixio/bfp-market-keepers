import { formatUnits, parseUnits } from 'viem';

const BASE = 18;
const UNIT = 1e18;

export const Wei = {
  toWei: (a: string | number) => parseUnits(a.toString(), BASE),
  fmt: (a: bigint) => formatUnits(a, BASE),
  min: (a: bigint, b: bigint) => (a > b ? b : a),
  max: (a: bigint, b: bigint) => (a > b ? a : b),
  div: (a: bigint, b: bigint) => (a * BigInt(UNIT)) / b,
  mul: (a: bigint, b: bigint) => (a * b) / BigInt(UNIT),
};
