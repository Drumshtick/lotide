const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  it("return correct key by value", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    const output = findKeyByValue(bestTVShowsByGenre, "The Wire");
    
    assert.equal(output, "drama");
  });

  it("returns undefined when value is not found", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    const output = findKeyByValue(bestTVShowsByGenre, "blah blah");

    assert.equal(output, undefined);
  });
});