// FUNCTION IMPLEMENTATION

const tail = function(array) {
  let newArray = [];
  newArray = array.slice(1);
  return newArray;
};

module.exports = tail;
