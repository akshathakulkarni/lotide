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
  if (arr1.length == 0 && arr2.length == 0) {
    return true;
  }
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
const middle = function(array) {
  let arrayLength = array.length;
  let middleArray = [];
  let midIndex = 0;
  if (array.length === 1 || array.length === 2) {
    middleArray = [];
  }
  else if (arrayLength % 2 !== 0) {
    midIndex = Math.floor(arrayLength / 2);
    middleArray.push(array[midIndex]);
  }
  else if (arrayLength % 2 === 0) {
    midIndex = arrayLength / 2;
    middleArray.push(array[midIndex - 1]);
    middleArray.push(array[midIndex]);
    middleArray;
  }
  else {
    middleArray = [];
  }
  
  console.log(middleArray);
  return middleArray;
}

assertArraysEqual(middle([1]),[]); // => []
assertArraysEqual(middle([1, 2]),[]); // => []

assertArraysEqual(middle([1, 2, 3]),[2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]); // => [3, 4]

 
