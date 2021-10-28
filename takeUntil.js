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

const takeUntil = function(array, callback) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    if(callback(array[i])) {
      break;
    } else {
      output.push(array[i]);
    }
  }
  return output;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);
assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);