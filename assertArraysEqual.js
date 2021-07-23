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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);// => true
assertArraysEqual([1, 2, 3], [3, 2, 1]);// => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);// => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false

/*assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // =>should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // =>should FAIL*/
