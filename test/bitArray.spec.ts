import { expect } from "chai";
import { BitArray } from "../lib/utils";
import "mocha";

describe("BitArray", () => {
  it("Should initialize", () => {
    const bitArray = new BitArray(10);
    expect(bitArray.length).to.equal(10);
    expect(bitArray).to.have.property("get");
    expect(bitArray).to.have.property("set");
    expect(bitArray).to.have.property("clear");
  });

  it("Should set a bit", () => {
    const bitArray = new BitArray(10);
    bitArray.set(6);
    expect(bitArray.vector[0]).to.eql(64);
  });

  it("Should get a bit", () => {
    const bitArray = new BitArray(10);
    bitArray.set(6);
    expect(bitArray.get(6)).to.eql(true);
  });

  it("Should clear a bit", () => {
    const bitArray = new BitArray(10);
    bitArray.set(6);
    bitArray.clear(6);
    expect(bitArray.get(6)).to.eql(false);
  });
});
