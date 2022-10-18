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

const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  for (i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
    if (i === " ") {
      continue;
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);

// expected output
// {
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }
