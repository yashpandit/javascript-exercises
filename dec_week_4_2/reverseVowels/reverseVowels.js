const reverseVowels = (s) => {
  let letters = s.split('');
  let i = 0;
  let j = letters.length - 1;
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  while (i < j) {
    let temp = '';
    if (vowels.includes(letters[i]) && vowels.includes(letters[j])) {
      temp = letters[i];
      letters[i] = letters[j];
      letters[j] = temp;
      i++;
      j--;
    } else if (!vowels.includes(letters[i])) {
      i++;
    } else {
      j--;
    }
  }

  return letters.join('');
};

module.exports = reverseVowels;
