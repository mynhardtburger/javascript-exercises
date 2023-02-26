const removeFromArray = function (arr, ...theArgs) {
  const exclude = new Set(theArgs);
  return arr.filter((item) => !exclude.has(item));
};

// Do not edit below this line
module.exports = removeFromArray;
