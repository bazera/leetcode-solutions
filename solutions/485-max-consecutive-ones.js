/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;

  for (let i = 0, j = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      j++;
      if (j > max) max = j;
      continue;
    }

    j = 0;
  }

  return max;
};
