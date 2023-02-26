const sumAll = function (x, y) {
  if (x < 0 || y < 0) {
    return "ERROR";
  }
  if (x !== +x || y !== +y) {
    return "ERROR";
  }

  smaller = x <= y ? +x : +y;
  larger = x <= y ? +y : +x;

  function recurse(value, max) {
    if (value === max) {
      return value;
    }
    return value + recurse(++value, max);
  }

  return recurse(smaller, larger);
};

console.log(sumAll(10, "90"));

// Do not edit below this line
module.exports = sumAll;
