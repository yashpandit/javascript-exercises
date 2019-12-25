const longestWord = (words) => {
  words.sort();
  let set = new Set();
  let result = '';

  for (let word of words) {
    if (word.length === 1 || set.has(word.slice(0, -1))) {
      set.add(word);
      if (word.length > result.length) {
        result = word;
      }
    }
  }
  return result;
};

module.exports = longestWord;
