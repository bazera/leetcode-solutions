/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const total = nums.reduce((acc, curr) => (acc += curr), 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    leftSum += nums[i];
    if (total - leftSum === leftSum - nums[i]) {
      return i;
    }
  }

  return -1;
};
