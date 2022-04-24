/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let res = '';

  let i = s.length - 1;
  let count = 0;

  while (i >= 0) {
    if (s[i] === ' ' && s[i - 1] !== ' ') {
      if (count) {
        if (res) {
          res += ' ';
        }
        for (let j = 1; j <= count; j++) {
          const ss = s[i + j];
          if (ss !== ' ') {
            res += ss;
          }
        }
      }

      i--;
      count = 0;
      continue;
    } else {
      count++;
    }

    i--;
  }

  if (count) {
    if (res) {
      res += ' ';
    }
    for (let j = 0; j <= count; j++) {
      if (s[j] && s[j] !== ' ') {
        res += s[j];
      }
    }
  }

  return res;
};
