import Decimal from "decimal.js";
import { HashingFunctions } from "./types";
import { BitArray, getError, getK } from "./utils";

class BloomFilter<Type = string> {
  k: number;
  m: number;
  n: number;
  bitArray: BitArray;
  hashingFunctions: Array<HashingFunctions<Type>>;

  constructor(
    m: number,
    n: number,
    permittedError: Decimal = new Decimal(0.015),
    hashingFunctions: Array<HashingFunctions<Type>>
  ) {
    this.m = m;
    this.n = n;
    this.k = getK(m, n);
    const error = getError(this.k, m, n);
    if (error.gt(permittedError))
      throw new Error(
        `Permitted error: ${permittedError.toString()}, found error: ${error.toString()}`
      );
    this.bitArray = new BitArray(m);
    if (hashingFunctions.length > this.k) {
      throw new Error("Too many hashing functions");
    }
    this.hashingFunctions = hashingFunctions;
  }

  add(value: Type): void {
    for (const hf of this.hashingFunctions) {
      const id = hf.hash(value);
      this.bitArray.set(id);
    }
  }

  exists(value: Type): boolean {
    let exists = true;
    for (const hf of this.hashingFunctions) {
      const id = hf.hash(value);
      if (!this.bitArray.get(id)) {
        exists = false;
      }
    }
    return exists;
  }
}

export { BitArray, HashingFunctions, getError, getK, BloomFilter };
