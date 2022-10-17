const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`👍👌🔔 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`👎🙀🔕 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (letters) {
  let count = {};
  for (const item of letters) {
    if (item === " ") {
      continue;
    }
    if (count[item]) {
      count[item] += 1;
    } else {
      count[item] = 1;
    }
  }
  console.log(count);
  return count;
};

countLetters("lighthouse in the house");

// Output = count of all letters in string line #14
// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }
