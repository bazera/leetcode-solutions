/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let max = arr[arr.length - 1];
  arr[arr.length - 1] = -1;

  for (let i = arr.length - 2; i >= 0; i--) {
    let temp = arr[i];
    arr[i] = max;

    if (max < temp) {
      max = temp;
    }
  }

  return arr;
};
