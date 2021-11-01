const eqArrays = require('./eqArrays');
const eqObjects = function(object1, object2) {
  const inspect = require('util').inspect;
  let array1 = Object.keys(object1);
  let array2 = Object.keys(object2);
  if (array1.length !== array2.length) {
    return false;
  }
  for (let key of array1) {
    if (typeof object1[key] === 'object' || typeof object2[key === 'object']) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if(eqObjects(object1, object2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)} `);
  } else {
    console.log(`🚩🚩🚩 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

// assertObjectsEqual({a: 2, b: 4}, {b: 4, a:2});

module.exports = assertObjectsEqual;