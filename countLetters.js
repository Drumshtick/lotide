const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚩🚩🚩 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(sentance) {
  const letters = {};
  for (const char of sentance) {
    if (char !== ' ') {
      if (letters[char.toLowerCase()] === undefined) {
        letters[char.toLowerCase()] = 1;
      } else {
        letters[char.toLowerCase()] += 1;
      }
    } else {
      continue;
    }
  }
  return letters;
};

assertEqual(countLetters("Hello")["h"], 1);
assertEqual(countLetters("Hello")["e"], 1);
assertEqual(countLetters("Hello")["l"], 2);
assertEqual(countLetters("Hello")["o"], 1);