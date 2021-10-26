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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should PASS
