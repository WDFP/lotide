// FUNCTION IMPLEMENTATION

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`👍👌🔔 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`👎🙀🔕 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function (array) {
  newArray = [];
  newArray = array.slice(1);
  return newArray;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(tail(words).length, 2); // original array should still have 3 elements!
