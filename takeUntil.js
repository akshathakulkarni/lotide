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

const eqArrays = function(arr1, arr2) {
  let output = '';
  for (let val1 of arr1) {
    for (let val2 of arr2) {     
      if (val1 === val2) {
        output = true;
      } else {
        output = false;
      }
    }
  }
  return output;
};

const takeUntil = function (data, callback) {
  let output = [];
  for (let item of data) {
    if (!callback(item)) {
      output.push(item);
    } else {
      break;
    }
  }
  return output;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(takeUntil(data2, x => x === ','), [ "I've", 'been', 'to', 'Hollywood' ]);

module.exports = takeUntil;