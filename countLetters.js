const countLetters = function(aRandomString) {
  const resultObject = {};
  for (let letter of aRandomString) {
    const keys = Object.keys(resultObject);
    if (keys.includes(letter)) {
      resultObject[letter] += 1;
    } else {
      if (letter !== ' ') {
        resultObject[letter] = 1;
      }
    }
  }
  return resultObject;
};

module.exports = countLetters;