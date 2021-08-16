const { assert } = require('chai');
const eqObjects = require('../eqObjects');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
//eqObjects(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
//eqObjects(cd, cd2); // => false

describe("#eqobjects", () => {
  it("returns true for 'eqObjects(ab, ba))'", () => {
    assert.deepEqual(eqObjects(ab, ba), true);
  });
  it("returns false for 'eqObjects(ab, abc))'", () => {
    assert.deepEqual(eqObjects(ab, abc), false);
  });
  it("returns true for 'eqObjects(cd, dc)'", () => {
    assert.deepEqual(eqObjects(cd, dc), true);
  });
  it("returns false for 'eqObjects(cd, cd2))'", () => {
    assert.deepEqual(eqObjects(cd, cd2), false);
  });

});




//assertEqual(eqObjects(cd, dc), true);
//assertEqual(eqObjects(cd, cd2), false);