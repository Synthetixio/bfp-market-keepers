import { shuffle } from 'lodash';

export const sleep = async (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const oneOf = <A>(a: A[]) => shuffle(a)[0];
