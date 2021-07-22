const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`:-) :-) Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`:-| :-| Assertion Failed: ${actual} != ${expected}`);
  }
};
const tail = function (arr) {
  let newArr = [];
  for(let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
assertEqual(tail([5]),5);