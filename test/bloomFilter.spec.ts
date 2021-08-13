import { expect } from "chai";
import { BloomFilter } from "../lib/sdk";
import "mocha";
import { HashingFunction } from "../lib/types";
import Decimal from "decimal.js";
import murmur from "murmurhash-js";

const hashOne: HashingFunction<string> = {
  hash: function (v: string) {
    const d = murmur(v, 28396517935629984);
    const digit = Math.floor(d / Math.pow(10, d.toString().length - 1));
    return digit;
  },
};

const hashTwo: HashingFunction<string> = {
  hash: function (v: string) {
    const d = murmur(v, 298332974657598);
    const digit = Math.floor(d / Math.pow(10, d.toString().length - 1));
    return digit;
  },
};

const hashThree: HashingFunction<string> = {
  hash: function (v: string) {
    const d = murmur(v, 29837892574897598);
    const digit = Math.floor(d / Math.pow(10, d.toString().length - 1));
    return digit;
  },
};

describe("Bloom Filter", () => {
  it("Should create a new Bloom Filter", () => {
    const bf = new BloomFilter<string>(256, 12, new Decimal("0.001"), [
      hashOne,
      hashTwo,
    ]);
    expect(bf).to.be.an.instanceof(BloomFilter);
    expect(bf.bitArray.length).to.eql(256);
  });

  it("Should throw when permitted error < found error", () => {
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

  it("Should throw when too many hashing functions are passed in", () => {
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

  it("Should add element to the filter", () => {
    const bf = new BloomFilter<string>(64, 12, new Decimal(0.08), [
      hashOne,
      hashTwo,
      hashThree,
    ]);
    bf.add("foo");
    expect(bf.exists("foo")).to.eql(true);
  });
});
