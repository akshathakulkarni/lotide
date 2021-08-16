const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    const character = sentence.charAt(i); // To get individual elements of the string.
    if (character !== " ") {
      if (results[character]) {
        results[character].push(i);
      } else {
        results[character] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;