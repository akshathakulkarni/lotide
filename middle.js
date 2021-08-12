const middle = function(array) {
  let arrayLength = array.length;
  let middleArray = [];
  let midIndex = 0;
  if (array.length === 1 || array.length === 2) {
    middleArray = [];
  }
  else if (arrayLength % 2 !== 0) {
    midIndex = Math.floor(arrayLength / 2);
    middleArray.push(array[midIndex]);
  }
  else if (arrayLength % 2 === 0) {
    midIndex = arrayLength / 2;
    middleArray.push(array[midIndex - 1]);
    middleArray.push(array[midIndex]);
    middleArray;
  }
  else {
    middleArray = [];
  }
  
  console.log(middleArray);
  return middleArray;
}

module.exports = middle;


