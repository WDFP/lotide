const findKeyByValue = function (data, valueToCompare) {
  for (const key in data) {
    if (valueToCompare === data[key]) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};
