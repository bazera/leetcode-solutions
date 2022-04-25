/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0;
  let j = 0;

  while (i < nums.length) {
    if (nums[i]) {
      nums[j] = nums[i];
      i++;
      j++;
      continue;
    }

    i++;
  }

  for (let i = 0; i < nums.length - j; i++) {
    nums[nums.length - i - 1] = 0;
  }
};
