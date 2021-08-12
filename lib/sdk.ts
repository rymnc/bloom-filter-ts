import { HashingFunctions } from "./types";
import { BitArray } from "./utils";

export class BloomFilter {
  k: number;
  m: number;
  n: number;
  bitArray: BitArray;
  hashingFunctions: Array<HashingFunctions>;

  constructor(
    m: number,
    n: number,
    permittedError: number = 0.15,
    hashingFunctions: Array<HashingFunctions>
  ) {
    this.m = m;
    this.n = n;
    this.k = (m / n) * Math.log(2);
    const error = Math.pow(1 - Math.exp((-this.k * n) / m), this.k);
    if (error > permittedError)
      throw new Error(
        `Permitted error: ${permittedError}, found error: ${error}`
      );
    this.bitArray = new BitArray(m);
    if (hashingFunctions.length > Math.floor(this.k)) {
      throw new Error("Too many hashing functions");
    }
    this.hashingFunctions = hashingFunctions;
  }

  add(value: string | Buffer): void {}
}
