/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let i = 0;
  let j = numbers.length - 1;

  while (i < j) {
    const d = target - numbers[j];
    if (numbers[i] === d) {
      return [i + 1, j + 1];
    }

    if (numbers[i] < d) {
      i++;
    }

    if (numbers[i] > d) {
      j--;
    }
  }
};
