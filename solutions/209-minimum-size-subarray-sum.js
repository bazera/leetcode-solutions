/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let i = 0;
  let j = 0;

  let minCount = Number.MAX_SAFE_INTEGER;

  let sum = 0;

  while (i + j < nums.length) {
    sum += nums[j + i];

    if (sum < target) {
      j++;
      continue;
    }

    minCount = Math.min(minCount, j + 1);

    i++;
    j = 0;
    sum = 0;
  }

  return minCount != Number.MAX_SAFE_INTEGER ? minCount : 0;
};
