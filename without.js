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

const without = function (source, itemsToRemove) {
  let newArray = [];
  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray;
};

const test1 = without([1, 2, 3], [1]); // => [2, 3]
assertArraysEqual(test1, [2, 3]);

const test2 = without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
assertArraysEqual(test2, ["1", "2"]);
