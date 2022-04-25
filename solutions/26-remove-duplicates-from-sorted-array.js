/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0;
  let j = 0;

  while (i < nums.length) {
    if (nums[i] === nums[i + 1]) {
      i++;
      continue;
    }

    nums[j] = nums[i];
    j++;
    i++;
  }

  return j;
};
