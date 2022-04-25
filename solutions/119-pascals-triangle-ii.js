/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const rows = generate(rowIndex + 1);
  return rows[rows.length - 1];
};

var generate = function (numRows) {
  const arr = [];

  for (let i = 0; i < numRows; i++) {
    const inner = [];

    for (let j = 0; j < i + 1; j++) {
      if (i > 0) {
        const right = arr[i - 1][j];
        const left = arr[i - 1][j - 1];
        inner.push((right ?? 0) + (left ?? 0));
        continue;
      }

      inner.push(i + 1);
    }

    arr.push(inner);
  }

  return arr;
};
