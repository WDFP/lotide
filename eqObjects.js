const eqArrays = function (array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return false;
  }
  if (array1.length !== array2.length) {
    return false;
  }
  // need loop to loop through each array to see if the elements are the same and true
  for (i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      const result = eqArrays(array1[i], array2[i]);
      if (!result) {
        return false;
      }
    }
    // see if elements are the same
    // compare all elements in array1 and array2 with the correct indexes.
    else if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`👍👌🔔 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`👎🙀🔕 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

// check to see if nested arrays are equal:
// console.log(eqArrays([3, [3, 2, 0], 1], [3, [3, 2, 1], 1]));
