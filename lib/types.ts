export interface HashingFunctions<Type> {
  /**
   * Should accept a string and return an id
   */
  hash: (key: Type) => number;
}
