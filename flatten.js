const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`👍👌🔔 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`👎🙀🔕 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arrays1, arrays2) {
  // if (arrays1 === arrays2) {
  //   return true;
  //   }  else {
  if (arrays1.length !== arrays2.length) {
    return false;
  }
  // need loop to loop through each array to see if the elements are the same and true
  for (i = 0; i < arrays1.length; i++) {
    // see if elements are the same
    // compare all elements in array1 and array2 with the correct indexes.
    if (arrays1[i] !== arrays2[i]) {
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

const flatten = function (array) {
  let newArray = [];
  for (let item of array) {
    if (Array.isArray(item)) {
      for (let item2 of item) {
        newArray.push(item2);
      }
    } else {
      newArray.push(item);
    }
  }
  return newArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
