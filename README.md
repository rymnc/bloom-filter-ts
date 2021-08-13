# Bloom Filter in Typescript

In an effort to understand bloom filters better, this repo was set up.

The goal would be to provide users an extendable sdk to create and manipulate bloom filters

This package uses decimal.js to handle precision arithmetic

## Usage

There are multiple ways you can create the bloom filter according to your requirements.

### Using the helper functions

1. `getKandM(n: number, permittedError: Decimal): {k: number, m: number}`

   `k`: number of hashing functions

   `m`: bitCount

   _Use this if you know n and permittedError_

   Javascript/Typescript:

   ```ts
   const { k, m } = getKandM(12, new Decimal("0.001"));
   ```

2. `getK(m: number, n: number): number`

   `k`: number of hashing functions

   _Use this if you know m and n_

   Javascript/Typescript:

   ```ts
   const k = getK(256, 12);
   ```

3. `getError(k: number, m: number: n: number): Decimal`

   `error`: % of false positives returned

   _Use this to check if your k, m, n values are OK_

   Javascript/Typescript:

   ```ts
   const error = getError(14, 256, 12);
   ```

4. `generateHashingFunction<Type>() : HashingFunction`

   The hashing function returned works on the murmur algorithm

   _It is recommended to bring other algorithms as well to improve robustness_

   Javascript:

   ```js
   const hashingFunction = generateHashingFunction();
   ```

   Typescript:

   ```ts
   // the function takes a generic value type - as long as String(Type) // supports the type you're passing in, it will work
   const hashingFunction = generateHashingFunction<string>();
   ```

5. `generateBloomFilter<Type>(n: number, permittedError: Decimal, step: number = 1): BloomFilter<Type>`

   _Use this when you have n and permittedError_

   Javascript:

   ```js
   const bf = generateBloomFilter(25, new Decimal("0.0001"));
   ```

   Typescript:

   ```ts
   const bf = generateBloomFilter<string>(25, new Decimal("0.001"));
   ```

---

**Note**: For more detailed documentation - checkout the docs/ directory

---
