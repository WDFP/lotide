const assert = require("chai").assert;
const tail = require("../tail");

// Test Case: Check the original array

const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words)); // no need to capture the return value since we are not checking it
// assertEqual(tail(words).length, 2); // original array should still have 3 elements!

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    // assert.strictEqual(tail(words).length, 2);
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  });
});
