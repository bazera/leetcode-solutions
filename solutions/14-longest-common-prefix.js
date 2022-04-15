/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 1) {
    return strs[0];
  }

  let common = findCommon(strs[0], strs[1]);

  for (let i = 1; i < strs.length; i++) {
    common = findCommon(common, strs[i]);
    if (!common) {
      return common;
    }
  }

  return common;
};

function findCommon(s1, s2) {
  let c = "";
  for (let i = 0; i < Math.min(s1.length, s2.length); i++) {
    if (s1[i] !== s2[i]) {
      break;
    }

    c = `${c}${s1[i]}`;
  }

  return c;
}
