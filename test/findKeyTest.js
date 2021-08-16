const { assert } = require('chai');
const findKey = require('../findKey');

const myObj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

describe("#findKey", () => {
  it("returns 'noma' for 'findKey(myObj), x => x.stars === 2'", () => {
    assert.deepEqual(findKey((myObj), x => x.stars === 2), "noma");
  });
});
