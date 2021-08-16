const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);
  let objResult = '';
  if (key1.length === key2.length) {
    for (let value of key1) {
      if (Array.isArray(object1[value]) && Array.isArray(object2[value])) {
        objResult = eqArrays(object1[value], object2[value]);
      } else if (object1[value] === object2[value]) {
        objResult = true;
      } else {
        objResult = false;
      }
    }
  } else {
    objResult = false;
  }
  return objResult;
};

module.exports = eqObjects;