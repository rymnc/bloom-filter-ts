export class BitArray {
  private vector: Uint32Array;

  /**
   * Constructor
   * @param size
   */
  constructor(size: number) {
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
}
