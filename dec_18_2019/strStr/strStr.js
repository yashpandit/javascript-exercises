const strStr = (haystack, needle) => {
  if (needle === '') {
    return 0;
  }

  let index = -1;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] == needle[0]) {
      index = i;
      return index;
    }
  }

  return index;
};

module.exports = strStr;
