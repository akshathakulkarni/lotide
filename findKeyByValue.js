const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`:-) :-) Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`:-| :-| Assertion Failed: ${actual} != ${expected}`);
  }
};

const findKeyByValue = function (inputObj, someValue) {
  let keys = Object.keys(inputObj);
  for (let value of keys) {
    if (inputObj[value] === someValue) {
      console.log(value);
      return value;
    }
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;
