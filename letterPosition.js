const assertArraysEqual = function(array1, array2) {
  let result = eqArrays(array1, array2);
  console.log(result);
  if (result === true) {
    console.log(" :-) :-) Assertion Passed.");
  }
  else {
    console.log(" :-/ :-/ Assertion Failed.");
  }
  return result;  
};

const eqArrays = function(arr1, arr2) {
  let output = '';
  for (let val1 of arr1) {
    for (let val2 of arr2) {
      if (val1 === val2) {
        output = true;
      }
      else {
        output = false;
      }
    }
  }
  return output;
};

const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    const character = sentence.charAt(i); // To get individual elements of the string.
    if(character !== " "){
      if (results[character]) {
        results[character].push(i)
      } else {
        results[character] = [i];
      }
    }
  }
   console.log(results);
  return results;
};

letterPositions("lighthouse in the house");
assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;