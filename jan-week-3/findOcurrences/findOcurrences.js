const findOccurrences = (text, first, second) => {
  const words = text.split(' ');
  let third = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i - 1] === second && words[i - 2] === first) {
      third.push(words[i]);
    }
  }

  return third;
};

module.exports = findOccurrences;
