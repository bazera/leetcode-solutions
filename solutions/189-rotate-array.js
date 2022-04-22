/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (!k) {
    return;
  }

  if (!nums.length) {
    return;
  }

  if (k >= nums.length) {
    k = k % nums.length;
  }

  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const index = i + k;

    if (index < nums.length) {
      map[index] = nums[index];
      nums[index] = map[i] ?? nums[i];
    } else {
      nums[index - nums.length] = map[i] ?? nums[i];
    }
  }
};
