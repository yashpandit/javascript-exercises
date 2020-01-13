const reverseWords = (s) => {
  let words = s.split(' ');
  let reversedWords = [];

  for (let word of words) {
    reversedWords.push(word.split('').reverse().join(''));
  }

  return reversedWords.join(' ');
};

module.exports = reverseWords;
