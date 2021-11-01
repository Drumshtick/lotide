const assert = require('chai').assert;
const tail = require('../tail');

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

describe('#tail', () => {
  it("Original array should not be modified", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words, ["Yo Yo", "Lighthouse", "Labs"]);
  });
  it("returns new array without first element", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    let newArray = tail(words);
    assert.deepEqual(newArray, ["Lighthouse", "Labs"]);
  });
});