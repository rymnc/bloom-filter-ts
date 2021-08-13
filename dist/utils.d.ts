import { Decimal } from "decimal.js";
import { HashingFunction } from "./types";
export declare class BitArray {
  vector: Uint32Array;
  size: number;
  constructor(size: number);
  set(index: number): void;
  clear(index: number): void;
  get(index: number): boolean;
  get length(): number;
}
export declare function getK(m: number, n: number): number;
export declare function getKandM(
  n: number,
  permittedError: Decimal,
  step?: number
): {
  k: number;
  m: number;
};
export declare function getError(k: number, m: number, n: number): Decimal;
export declare function generateHashingFunction<
  Type = string
>(): HashingFunction<Type>;
