const assertObjectsEqual = function (obj1, obj2) {
  const inspect = require('util').inspect; // Making use of util library to view detailed object in console statement.
  //console.log(`Example label: ${inspect(obj1)}`);
  let result = eqObjects(obj1, obj2);
  //console.log(result);
  if (result === true) {
    console.log(` :-) :-) Assertion Passed. ${inspect(obj1)} === ${inspect(obj2)}`);
  }
  else {
    console.log(` :-/ :-/ Assertion Failed. ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
  return result;    
}

const eqObjects = function (object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys (object2);
  let objResult = '';
  if (key1.length === key2.length) {
    for (let value of key1) { 
      for (let value2 of key2) {
        if(Array.isArray(object1[value]) && Array.isArray(object2[value2])) {
          console.log("inside if");
          eqArrays(object1[value], object2[value2]);
        }
        else {
          if (object1[value] === object2[value2]) { 
            objResult = true;
          }
        }
      }
    }
  }
  else {
    objResult = false;
  }
  return objResult;
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

