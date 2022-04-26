/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const arr = [];

  let i = 0;
  let j = nums.length - 1;

  let p = nums.length - 1;

  while (p >= 0) {
    const a = Math.abs(nums[i]);
    const b = Math.abs(nums[j]);

    if (a > b) {
      arr[p] = Math.pow(a, 2);
      i++;
      p--;
      continue;
    }

    arr[p] = Math.pow(b, 2);
    j--;
    p--;
  }

  return arr;
};
