// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("👍👌🔔" + " Assertion Passed: " + actual + " === " + expected);
  } else if (actual !== expected) {
    console.log("👎🙀🔕" + " Assertion Failed: " + actual + " !== " + expected);
  }
};
// TEST CODE

assertEqual("Bootcamp", "Boot");
assertEqual(4, 4);
