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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  console.log(results);
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
//const results1 = words.map(word => word[0]);
//console.log(results1);

assertArraysEqual(map(words, word => word[0]),[ 'g', 'c', 't', 'm', 't' ]);

const stringArray = ['1234', '2345', '4546', '6789'];
assertArraysEqual(map(stringArray, str => str[0]),['1', '2', '4', '6']);

const numArray = [12, 23, 34, 56];
assertArraysEqual(map(numArray, num => num * 2),[ 24, 46, 68, 112 ]);

