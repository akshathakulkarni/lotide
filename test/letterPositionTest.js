const { assert } = require('chai');
const letterPosition = require('../letterPosition');

describe("#letterPosition", () => {
  it("returns [1] for 'letterPosition('hello').e'", () => {
    assert.deepEqual(letterPosition("hello").e, [1]);
  });
});


//letterPositions("lighthouse in the house");
//assertArraysEqual(letterPositions("hello").e, [1]);
