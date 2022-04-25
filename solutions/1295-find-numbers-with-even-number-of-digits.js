/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let evenDigitsCount = 0;

  for (let num of nums) {
    if (numberOfDigits(num) % 2 === 0) {
      evenDigitsCount++;
    }
  }

  return evenDigitsCount;
};

function numberOfDigits(n) {
  let count = 0;

  for (let i = 1; i <= n; i *= 10) {
    count++;
  }

  return count;
}
