/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  if (nums.length === 1) {
    return 1;
  }

  let max = -1;
  let index = -1;
  let second = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      second = max;
      max = nums[i];
      index = i;
      continue;
    }

    if (nums[i] > second) {
      second = nums[i];
    }
  }

  return max / second >= 2 ? index : -1;
};
