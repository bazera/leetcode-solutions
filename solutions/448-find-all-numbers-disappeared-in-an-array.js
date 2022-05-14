/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = true;
  }

  const arr = [];

  for (let i = 0; i < nums.length; i++) {
    if (!obj[i + 1]) {
      arr.push(i + 1);
    }
  }

  return arr;
};
