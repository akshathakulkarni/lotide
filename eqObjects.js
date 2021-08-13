const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`:-) :-) Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`:-| :-| Assertion Failed: ${actual} != ${expected}`);
  }
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


const eqObjects = function (object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys (object2);
  let objResult = '';
  if (key1.length === key2.length) {
    for (let value of key1) { 
      if(Array.isArray(object1[value]) && Array.isArray(object2[value])) {
        objResult = eqArrays(object1[value], object2[value]);
      }
      else if (object1[value] === object2[value]) { 
        objResult = true;
      } 
      else {
        objResult = false;
      }
    }
  }
  else {
    objResult = false;
  }
  console.log(objResult);
  return objResult;
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);

module.exports = eqObjects;