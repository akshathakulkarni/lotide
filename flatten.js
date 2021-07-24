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

const flatten = function(arr) {
  let localArr = [];
  for(let i = 0; i < arr.length; i++) {
    let checkForArray = Array.isArray(arr[i]);
    if (checkForArray === true) {
      for (let element of arr[i]) {
        localArr.push(element);
      }
    } else {
      localArr.push(arr[i]);
    }
  }
  return localArr;
}
console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [ 1, 2, 3, 4, 5, 6 ]));