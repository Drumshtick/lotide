const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("returns a 1d array when given a 2d array", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});