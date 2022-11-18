
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

module.exports = flatten;
