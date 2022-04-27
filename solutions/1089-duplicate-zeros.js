/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  let count = 0;
  let obj = {};

  let i = 0;
  while (i < arr.length) {
    obj[i] = arr[i];
    i++;
  }

  let j = 0;
  while (j < arr.length) {
    if (obj[j - count] > 0) {
      arr[j] = obj[j - count];
      j++;
      continue;
    }

    if (obj[j - count] === 0) {
      arr[j] = obj[j - count];
      if (j + 1 < arr.length) {
        arr[j + 1] = 0;
      }
      j += 2;
      count++;
      continue;
    }
  }
};
