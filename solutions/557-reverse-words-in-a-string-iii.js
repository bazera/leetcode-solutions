/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let temp = '';
  let res = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      res += reverse(temp) + ' ';
      temp = '';
      continue;
    }

    temp += s[i];
  }

  res += reverse(temp);

  return res;
};

const reverse = (s) => {
  let res = '';
  for (let i = s.length - 1; i >= 0; i--) {
    res += s[i];
  }
  return res;
};
