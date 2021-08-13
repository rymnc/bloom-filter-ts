export interface HashingFunction<Type> {
  /**
   * Should accept a string and return an id
   */
  hash: (key: Type) => number;
}
