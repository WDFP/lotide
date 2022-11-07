const eqArrays = require("./eqArrays");

const eqObjects = function (object1, object2) {
  const obj1 = Object.keys(object1);
  const obj2 = Object.keys(object2);
  if (obj1.length !== obj2.length) {
    return false;
  }
  for (const i of obj1) {
    if (Array.isArray(object1[i]) && Array.isArray(object2[i])) {
      let result = eqArrays(object1[i], object2[i]);
      if (!result) {
        return false;
      }
    } else {
      if (object1[i] !== object2[i]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`👍👌🔔 Assertion Passed: {${actual}} === {${expected}}`);
  } else {
    console.log(`👎🙀🔕 Assertion Failed: {${actual}} !== {${expected}}`);
  }
};
