import { expect } from "chai";
import { BloomFilter } from "../lib/sdk";
import "mocha";
import { HashingFunctions } from "../lib/types";
import Decimal from "decimal.js";

const hashOne: HashingFunctions<string> = {
  hash: function (v: string) {
    return 1;
  },
};

const hashTwo: HashingFunctions<string> = {
  hash: function (v: string) {
    return 2;
  },
};

describe.only("Bloom Filter", () => {
  it("should create a new Bloom Filter", () => {
    const bf = new BloomFilter<string>(256, 12, new Decimal("0.001"), [
      hashOne,
      hashTwo,
    ]);
    expect(bf).to.be.an.instanceof(BloomFilter);
    expect(bf.bitArray.length).to.eql(256);
  });

  it("should throw when permitted error < found error", () => {
    let err;
    try {
      new BloomFilter<string>(256, 12, new Decimal("0.00001"), [
        hashOne,
        hashTwo,
      ]);
    } catch (e) {
      err = e;
    }
    expect(err).to.not.be.undefined;
  });

  it("should throw when too many hashing functions are passed in", () => {
    let err;
    try {
      // for the below parameters
      // k = 1
      // err = 0.29531191028128656565
      new BloomFilter<string>(20, 7, new Decimal("0.30"), [hashOne, hashTwo]);
    } catch (e) {
      err = e;
    }
    expect(err).to.not.be.undefined;
  });
});
