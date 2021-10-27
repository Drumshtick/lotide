const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚩🚩🚩 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function(ar1, ar2) {
  if (!arrayLengthMatch(ar1, ar2)) {
    return false;
  } else if (!matchEachArrayElement(ar1, ar2)) {
    return false;
  } else {
    return true;
  }
};

const arrayLengthMatch = function(ar1, ar2) {
  if (ar1.length !== ar2.length) {
    return false;
  } else {
    return true;
  }
};

const matchEachArrayElement = function(ar1, ar2) {
  for (let i = 0; i < ar1.length; i++) {
    if (ar1[i] !== ar2[i]) {
      return false;
    }
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

assertObjectsEqual({a: 2, b: 4}, {b: 4, a:2});
/*
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if(actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)} `);
  } else {
    console.log(`🚩🚩🚩 Assertion Failed: ${inspect(actual)} !== Array 2 `);
  }
};
*/