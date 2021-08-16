const { assert } = require('chai');
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];
const stringArray = ['1234', '2345', '4546', '6789'];
const numArray = [12, 23, 34, 56];

describe("#map", () => {
  it("returns [ 'g', 'c', 't', 'm', 't' ] for 'map(words, word => word[0])'", () => {
    assert.deepEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
  });
  it("returns ['1', '2', '4', '6'] for 'map(stringArray, str => str[0])'", () => {
    assert.deepEqual(map(stringArray, str => str[0]),['1', '2', '4', '6']);
  });
  it("returns [ 24, 46, 68, 112 ] for 'map(numArray, num => num * 2)'", () => {
    assert.deepEqual(map(numArray, num => num * 2),[ 24, 46, 68, 112 ]);
  });
});