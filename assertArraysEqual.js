// FUNCTION IMPLEMENTATION

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  // need loop to loop through each array to see if the elements are the same and true
  for (i = 0; i < array1.length; i++) {
    // see if elements are the same
    // compare all elements in array1 and array2 with the correct indexes.
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`👍👌🔔 Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`👎🙀🔕 Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [3, 2, 1]); // =>
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
