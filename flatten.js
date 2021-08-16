const flatten = function(arr) {
  let localArr = [];
  for (let i = 0; i < arr.length; i++) {
    let checkForArray = Array.isArray(arr[i]);
    if (checkForArray === true) {
      for (let element of arr[i]) {
        localArr.push(element);
      }
    } else {
      localArr.push(arr[i]);
    }
  }
  return localArr;
};

module.exports = flatten;