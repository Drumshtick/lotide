const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").h, [0]);
// assertArraysEqual(letterPositions("hello").l, [2, 3]);
// console.log(letterPositions("hello"));

describe("#letterPositions", () => {
  it("returns the correct positions for each letter", () => {
    const input = "Cookie monsta is the best!";
    const output = letterPositions(input);
    const expected = { C: [ 0 ],
      o: [ 1, 2, 8 ],
      k: [ 3 ],
      i: [ 4, 14 ],
      e: [ 5, 19, 22 ],
      ' ': [ 6, 13, 16, 20 ],
      m: [ 7 ],
      n: [ 9 ],
      s: [ 10, 15, 23 ],
      t: [ 11, 17, 24 ],
      a: [ 12 ],
      h: [ 18 ],
      b: [ 21 ],
      '!': [ 25 ] 
    };
    assert.deepEqual(output, expected);
  });
  it("returns an empty object with an empty string as input", () => {
    const input = "";
    const output = letterPositions(input);
    const expected = {};
    assert.deepEqual(output, expected);
  });
});