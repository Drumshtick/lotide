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

const without = function(arSrc, itemsToRemoveAr) {
  let pass = [];
  for (let i = 0; i < arSrc.length; i++) {
    pass.push(arSrc[i]);
    for (let j = 0; j < itemsToRemoveAr.length; j++) {
      if(arSrc[i] === itemsToRemoveAr[j]) {
        pass.pop();
        break;
      }
    }
  }
  return pass;
};
assertArraysEqual(without(["cookie", "butter", "peas", "bananas"], ["butter", "bananas"]), ['cookie', 'peas']);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);