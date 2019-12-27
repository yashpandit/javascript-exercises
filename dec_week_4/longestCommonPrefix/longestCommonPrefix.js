const longestCommonPrefix = (strs) => {
  if (strs.length === 0) {
    return "";
  }

  let sortedStrs = strs.concat().sort();
  let first = sortedStrs[0];
  let last = sortedStrs[sortedStrs.length - 1];
  let a = 0;

  while (a < first.length && first.charAt(a) === last.charAt(a)) {
    a++;
  }

  return first.substring(0, a);
};

module.exports = longestCommonPrefix;
