export interface HashingFunction<Type> {
  hash: (key: Type) => number;
}
