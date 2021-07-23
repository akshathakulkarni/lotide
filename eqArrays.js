const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`:-) :-) Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`:-| :-| Assertion Failed: ${actual} != ${expected}`);
  }
};
const eqArrays = function(arr1, arr2) {
  let output = '';
  //console.log("inside eqArray");
  for (let val1 of arr1) {
    //console.log(val1);
    for (let val2 of arr2) {
      //console.log(val2);
      if (val1 === val2) {
        //console.log("inside if");
        output = true;
      }
      else {
        //console.log("ibside else");
        output = false;
      }
    }
  }
  //console.log(output);
  return output;
};
/*eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false*/

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // =>should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // =>should FAIL
