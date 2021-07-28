const assertEqual = function (actual, expected) {
  console.log(actual);
  if(length(actual) !=0 && length(expected) != 0) {
    
  }
  if (actual === expected) {
    console.log(`:-) :-) Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`:-| :-| Assertion Failed: ${actual} != ${expected}`);
  }
};

const countLetters = function (aRandomString) {
  const resultObject = {};
  for (letter of aRandomString) {
    let keys = Object.keys(resultObject);
    if (keys.includes(letter)) {
      resultObject[letter] += 1;
    } else {
      if (letter !== ' ') {
        resultObject[letter] = 1;
      }
    }
  }
  console.log(resultObject);
  return resultObject;
}

assertEqual(countLetters("lighthouse in the house"),{ l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });