import { Decimal } from "decimal.js";

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

export function getError(k: number, m: number, n: number): Decimal {
  const decM = new Decimal(m);
  const decN = new Decimal(n);
  const decK = new Decimal(k);
  const power = decK.mul(-decN).div(decM);
  const base = new Decimal(1).sub(Decimal.exp(1).pow(power));
  return Decimal.pow(base, decK);
}
