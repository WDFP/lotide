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

const middle = function (array) {
  let arrayLength = array.length;
  if (arrayLength < 3) {
    console.log([]);
    return;
  }
  if (arrayLength % 2 === 1) {
    let midIndex = Math.floor(arrayLength / 2);
    console.log([array[midIndex]]);
  } else if (arrayLength % 2 === 0) {
    let midIndex2 = arrayLength / 2;
    let midIndex1 = midIndex2 - 1;
    console.log([array[midIndex1], array[midIndex2]]);
  }
};

middle([1]); // => []
middle([1, 2]); // => []

middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]

middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
