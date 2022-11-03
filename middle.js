const eqArrays = require("./eqArray");

const assertArraysEqual = require("./assertArraysEqual");

const middle = function(array) {
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

module.exports = middle;
