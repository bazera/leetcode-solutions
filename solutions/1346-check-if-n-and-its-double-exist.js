/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i] * 2] || obj[arr[i] / 2]) {
      return true;
    }

    obj[arr[i]] = true;
  }

  return false;
};
