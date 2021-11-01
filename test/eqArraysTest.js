const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("arrays match should return true", () => {
    assert.equal(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("return false if arrays don't match", () => {
    assert.equal(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it("return true if arrays are same type and match", () => {
    assert.equal(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  it("return false if arrays match but not same type", () => {
    assert.equal(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
});