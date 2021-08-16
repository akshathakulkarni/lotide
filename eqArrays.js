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

module.exports = eqArrays;

