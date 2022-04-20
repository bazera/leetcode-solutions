/**
 * @param {string} word
 * @return {number}
 */
var longestBeautifulSubstring = function (word) {
  let i = 0;

  let counter = 0;
  let maxCounter = 0;

  let uniqueCharCount = 1;
  let maxUniqueCharCount = uniqueCharCount;

  if (word.length < 5) {
    return 0;
  }

  const compare = () => {
    if (uniqueCharCount > maxUniqueCharCount) {
      maxUniqueCharCount = uniqueCharCount;
    }

    if (counter > maxCounter && uniqueCharCount === 5) {
      maxCounter = counter;
    }
  };

  while (i < word.length - 1) {
    const a = word[i].charCodeAt(0);
    const b = word[i + 1].charCodeAt(0);

    if (a < b) {
      counter++;
      uniqueCharCount++;
      i++;
      continue;
    }

    if (a === b) {
      counter++;
      i++;
      continue;
    }

    if (a > b) {
      compare();

      counter = 0;
      uniqueCharCount = 1;
    }

    i++;
  }

  compare();

  if (maxUniqueCharCount < 5) {
    return 0;
  }

  return maxCounter + 1;
};
