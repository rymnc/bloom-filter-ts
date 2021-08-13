import { Decimal } from "decimal.js";
import murmur from "murmurhash-js/murmurhash2_gc";
import { HashingFunction } from "./types";

export class BitArray {
  vector: Uint32Array;
  size: number;

  /**
   * Constructor
   * @param size
   */
  constructor(size: number) {
    this.size = size;
    this.vector = new Uint32Array(Math.ceil(size / 32));
  }

  /**
   * Set a bit at the index
   * @param index
   */
  set(index: number): void {
    const bigI = Math.floor(index / 32);
    const smallI = index % 32;
    this.vector[bigI] |= 1 << smallI;
  }

  /**
   * Clear the bit at the index
   * @param index
   */
  clear(index: number): void {
    const bigI = Math.floor(index / 32);
    const smallI = index % 32;
    this.vector[bigI] &= ~(1 << smallI);
  }

  /**
   * Get the bit at the index
   * @param index
   * @returns boolean
   */
  get(index: number): boolean {
    const bigI = Math.floor(index / 32);
    const smallI = index % 32;
    return (this.vector[bigI] & (1 << smallI)) !== 0;
  }

  public get length(): number {
    return this.size;
  }
}

export function getK(m: number, n: number): number {
  const decM = new Decimal(m);
  const decN = new Decimal(n);
  return Math.floor(decM.div(decN).mul(Math.log(2)).toNumber());
}

export function getKandM(
  n: number,
  permittedError: Decimal,
  step: number = 1
): { k: number; m: number } {
  for (let m = 1; ; m += step) {
    const k = getK(m, n);
    const error = getError(k, m, n);
    if (error.lte(permittedError)) {
      return { k, m };
    }
  }
}

export function getError(k: number, m: number, n: number): Decimal {
  const decM = new Decimal(m);
  const decN = new Decimal(n);
  const decK = new Decimal(k);
  const power = decK.mul(-decN).div(decM);
  const base = new Decimal(1).sub(Decimal.exp(1).pow(power));
  return Decimal.pow(base, decK);
}

export function generateHashingFunction<
  Type = string
>(): HashingFunction<Type> {
  const random = Math.random() * Math.floor(Math.pow(10, 12));
  return {
    hash: function (v: Type) {
      const d = murmur(String(v), random);
      return Math.floor(d / Math.pow(10, d.toString().length - 1));
    },
  };
}
