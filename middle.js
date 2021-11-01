const middle = function(arr) {
  let arrLength = arr.length;
  let middle = [];
  if (arrLength === 1 || arrLength === 2) {
    return middle;
  } else if (arr.length % 2 !== 0) {
    middle.push(arr[Math.floor(arrLength / 2)]);
  } else {
    middle.push(arr[Math.floor(arrLength / 2) - 1]);
    middle.push(arr[Math.floor(arrLength / 2)]);
  }
  return middle;
};

module.exports = middle;

