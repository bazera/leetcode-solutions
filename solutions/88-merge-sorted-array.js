/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let a = m - 1;
  let b = n - 1;
  let i = a + b + 1;

  while (i >= 0 && b >= 0) {
    if (nums1[a] >= nums2[b]) {
      nums1[i] = nums1[a];
      i--;
      a--;
    } else {
      nums1[i] = nums2[b];
      i--;
      b--;
    }
  }
};
