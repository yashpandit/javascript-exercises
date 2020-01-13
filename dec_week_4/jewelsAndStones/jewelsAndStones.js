const numJewelsInStones = (J, S) => {
  let count = 0;
  S = S.split("");
  J = J.split("");
  let i = 0;

  while (i < S.length) {
    if (J.includes(S[i])) {
      S.splice(i, 1);
      count++;
      i--;
    }
    i++;
  }
  return count;
};

module.exports = numJewelsInStones;
