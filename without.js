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

function without(source, itemsToRemove) {
  let finalResult = [];
  for (let element of source) {
    finalResult.push(element);
  }
  for (let i = 0; i < finalResult.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (itemsToRemove[j] === finalResult[i]) {
        finalResult.splice(i,1);
      }
    }
  }
  return finalResult;
}

let resultantArray = [];

resultantArray = without([1, 2, 3], [1]); // => [2, 3]
console.log(resultantArray);

resultantArray = without(["1", "2", "3"], [1, 2, "3"]); 
console.log(resultantArray);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
