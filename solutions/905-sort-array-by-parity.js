/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let i = 0;
  let j = nums.length - 1;

  while (j > i) {
    if (nums[j] % 2 === 1) {
      j--;
      continue;
    }

    if (nums[i] % 2 === 1) {
      const temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      i++;
      j--;
      continue;
    }

    i++;
  }

  return nums;
};
