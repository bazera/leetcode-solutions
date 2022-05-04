/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (arr.length < 3) {
    return false;
  }

  let direction = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return false;
    }

    if (direction === 0) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }

      direction = 1;
      continue;
    }

    if (direction === 1 && arr[i] > arr[i + 1]) {
      direction = -1;
      continue;
    }

    if (direction === -1 && arr[i] < arr[i + 1]) {
      return false;
    }
  }

  return direction === -1 ? true : false;
};
