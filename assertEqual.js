const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚩🚩🚩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

assertEqual("cookie", "cookie");

assertEqual("cookie", "COOKIES");

assertEqual(12, 12);

assertEqual(12, 12.00001);