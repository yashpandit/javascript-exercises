const isHappy = (n) => {
  let before = {};

  while (n !== 1 && !before[n]) {
    before[n] = true;
    n = n.toString()
      .split('')
      .reduce((prev, next) => prev + Math.pow(next, 2), 0);
  }

  return n === 1;
};

module.exports = isHappy;
