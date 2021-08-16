const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  console.log(results);
  return results;
};

module.exports = map;

