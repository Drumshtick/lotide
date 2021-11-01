const assert = require('chai').assert;
const eqObjects = require('../eqObjects');


describe("#eqObjects", () => {
  it("return true if both objects are equal", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.equal(eqObjects(ab, ba), true);
  });

  it("return false if unequal", () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.equal(eqObjects(ab, abc), false);
  });

  it("return true if match but out of order", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.equal(eqObjects(cd, dc), true);
  });

  it("return flase if array inside objects do not match", () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.equal(eqObjects(cd, cd2), false);
  });
});