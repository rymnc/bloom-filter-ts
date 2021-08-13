import Decimal from "decimal.js";
import { HashingFunction } from "./types";
import { BitArray, generateHashingFunction, getError, getK } from "./utils";
declare class BloomFilter<Type = string> {
  k: number;
  m: number;
  n: number;
  bitArray: BitArray;
  hashingFunctions: Array<HashingFunction<Type>>;
  constructor(
    m: number,
    n: number,
    permittedError: Decimal | undefined,
    hashingFunctions: Array<HashingFunction<Type>>
  );
  add(value: Type): void;
  exists(value: Type): boolean;
}
declare function generateBloomFilter<Type = string>(
  n: number,
  permittedError: Decimal,
  step?: number
): BloomFilter<Type>;
export {
  BitArray,
  HashingFunction,
  getError,
  getK,
  BloomFilter,
  generateBloomFilter,
  generateHashingFunction,
};
