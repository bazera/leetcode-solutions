/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let i = 0;
  let j = 0;

  if (needle.length > haystack.length) {
    return -1;
  }

  while (i < haystack.length) {
    while (j < needle.length) {
      if (haystack[i + j] === needle[j]) {
        if (j === needle.length - 1) {
          return i;
        }

        j++;
        continue;
      }
      j = 0;
      break;
    }
    i++;
  }

  return -1;
};
