const findKey = function(myObj, callback) {
  for (const outerKey in myObj) {
    if (callback(myObj[outerKey])) {
      return outerKey;
    }
  }
};

module.exports = findKey;