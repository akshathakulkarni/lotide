const { assert } = require('chai');
const without = require('../without');

//const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
//const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const words = ["hello", "world", "lighthouse"];

describe("#without", () => {
  it("returns [2, 3] for 'without([1, 2, 3], [1])'", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it("returns ['1, '2'] for 'without(['1', '2', '3'], [1, 2, '3'])'", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ['1', '2']);
  });
  it("returns ['hello', 'world'] for 'without(words, ['hello', 'world', 'lighthouse'])'", () => {
    assert.deepEqual(without(words, ['lighthouse']), ['hello', 'world']);
  });
  it("returns ['2'] for 'without(['1', '1', '1', '2', '3', '1', '1'], ['1', 2, '3']'", () => {
    assert.deepEqual(without(['1', '1', '1', '2', '3', '1', '1'], ['1', 2, '3']), ['2']);
  });
});
