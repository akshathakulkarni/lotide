const findKeyByValue = function(inputObj, someValue) {
  const keys = Object.keys(inputObj);
  for (let value of keys) {
    if (inputObj[value] === someValue) {
      return value;
    }
  }
};

module.exports = findKeyByValue;
