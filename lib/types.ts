export interface HashingFunctions {
    hash: (str: string | Buffer) => number;
}