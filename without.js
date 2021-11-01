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
// assertArraysEqual(without(["cookie", "butter", "peas", "bananas"], ["butter", "bananas"]), ['cookie', 'peas']);
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;