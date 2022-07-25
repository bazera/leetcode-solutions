/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function (h, w, horizontalCuts, verticalCuts) {
  let maxHeight = findMax([0, ...horizontalCuts, h]);
  let maxWidth = findMax([0, ...verticalCuts, w]);
  let mod = 1e9 + 7;

  return (BigInt(maxHeight) * BigInt(maxWidth)) % BigInt(mod);
};

function findMax(arr) {
  arr.sort((a, b) => {
    return a - b;
  });

  let max = 1;

  for (let i = 1; i < arr.length; i++) {
    const sub = arr[i] - arr[i - 1];
    if (sub > max) {
      max = sub;
    }
  }

  return max;
}
