/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let max;
  let min;

  if (a.length >= b.length) {
    max = a;
    min = b;
  } else {
    max = b;
    min = a;
  }

  let save = false;
  let res = "";

  const add = (x, y) => {
    switch (x + y) {
      case 2:
        if (save) {
          return "1";
        }

        save = true;
        return "0";
      case 1:
        if (save) {
          return "0";
        }

        return "1";
      case 0:
        if (save) {
          save = false;
          return "1";
        }
        return "0";
    }
  };

  for (let i = max.length - 1; i >= 0; i--) {
    res = `${add(
      Number(max[i]) || 0,
      Number(min[i - (max.length - min.length)]) || 0
    )}${res}`;
  }

  return save ? `1${res}` : res;
};
