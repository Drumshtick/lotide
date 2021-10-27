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

const assertArraysEqual = function(ar1, ar2) {
  if (eqArrays(ar1, ar2)) {
    console.log(`✅✅✅ Assertion Passed: Array 1 [${ar1}] === Array 2 [${ar2}]`);
  } else {
    console.log(`🚩🚩🚩 Assertion Failed: Array 1 [${ar1}] !== Array 2 [${ar2}]`);
  }
};

const middle = function(arr) {
  let arrLength = arr.length;
  let middle = [];
  if (arrLength === 1 || arrLength === 2) {
    return middle;
  } else if (arr.length % 2 !== 0) {
    middle.push(arr[Math.floor(arrLength / 2)]);
  } else {
    middle.push(arr[Math.floor(arrLength / 2) - 1]);
    middle.push(arr[Math.floor(arrLength / 2)]);
  }
  return middle;
};

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);