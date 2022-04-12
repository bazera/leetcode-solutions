/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const n = mat.length;
  const m = mat[0].length;

  const arr = [];

  let direction = 0;

  let i = (j = 0);
  while (i < n && j < m) {
    arr.push(mat[i][j]);

    if (direction === -1 && j !== 0 && i !== n - 1) {
      j--;
      i++;
      continue;
    }

    if (direction === 1 && i !== 0 && j !== m - 1) {
      j++;
      i--;
      continue;
    }

    if (i === n - 1 && j === m - 1) {
      break;
    }

    if (i === n - 1) {
      j++;
      direction = 1;
      continue;
    }

    if (j === m - 1) {
      i++;
      direction = -1;
      continue;
    }

    if (i === 0) {
      j++;
      direction = -1;
      continue;
    }

    if (j === 0) {
      i++;
      direction = 1;
      continue;
    }
  }

  return arr;
};
