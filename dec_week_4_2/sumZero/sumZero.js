const sumZero = (n) => {
  let num = Math.floor(n / 2);
  let res = [];

  for (let i = 1; i <= num; i++) {
    res.push(i, -i);
  }

  if (n % 2 !== 0) {
    res.push(0);
  }

  return res;
};

module.exports = sumZero;
