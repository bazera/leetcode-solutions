/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  let i = (j = 0);

  const arr = [];

  counter = 0;

  while (arr.length < m * n) {
    arr.push(matrix[i][j]);

    if (i === counter + 0 && j !== n - 1 - counter) {
      j++;
      continue;
    }

    if (j === n - 1 - counter && i !== m - 1 - counter) {
      i++;
      continue;
    }

    if (i === m - 1 - counter && j !== 0 + counter) {
      j--;
      continue;
    }

    if (j === 0 + counter && i !== 1 + counter) {
      i--;
      continue;
    }

    if (i === counter + 1) {
      j++;
      counter++;
      continue;
    }
  }

  return arr;
};
