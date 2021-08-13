import { expect } from "chai";
import { getError, getK } from "../lib/utils";
import "mocha";
import Decimal from "decimal.js";
import { generateBloomFilter } from "../lib/sdk";

describe("Utils", () => {
  it("Should get valid value of k", () => {
    const k = getK(256, 12);
    expect(k).to.eql(14);
  });

  it("Should get error valid error probability", () => {
    const error = getError(14, 256, 12);
    expect(error).to.eql(new Decimal("0.000035698092864978683402"));
  });

  it("Should generate a bloom filter based on n and error", () => {
    let err: any;
    try {
      generateBloomFilter<string>(12, new Decimal("0.01"));
    } catch (e) {
      err = e;
    }
    expect(err).to.be.undefined;
  });
});
