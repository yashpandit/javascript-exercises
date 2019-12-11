const balancedStringSplit = (s) => {
  const R = "R";
  const L = "L";
  let countR = 0;
  let countL = 0;
  let balancedCount = 0;
  let letters = s.split('');
  let i = 0;

  while (letters.length > 0) {
    if (letters[i] === R) {
      countR++;
      i++;
    } else if (letters[i] === L) {
      countL++;
      i++;
    }

    if (countR === countL) {
      balancedCount++;
      letters = letters.splice(i, letters.length);
      countR = 0;
      countL = 0;
      i = 0;
    }
  }
  return balancedCount;
};

module.exports = balancedStringSplit;