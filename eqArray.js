// FUNCTION IMPLEMENTATION

const assertEqual = require("./assertEqual");

const eqArrays = function(arrays1, arrays2) {
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

module.exports = eqArrays;