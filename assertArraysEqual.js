const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  let result = eqArrays(array1, array2);
  console.log(result);
  if (result === true) {
    console.log(" :-) :-) Assertion Passed.");
  } else {
    console.log(" :-/ :-/ Assertion Failed.");
  }
  return result;
};

module.exports = assertArraysEqual;

