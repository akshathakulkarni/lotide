const takeUntil = function(data, callback) {
  let output = [];
  for (let item of data) {
    if (!callback(item)) {
      output.push(item);
    } else {
      break;
    }
  }
  return output;
};

module.exports = takeUntil;