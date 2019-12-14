const mySqrt = (x) => {
  let count = 1;
  let square = 1;

  while (square < x) {
    count++;
    square = count * count;
  }

  if (square > x) {
    return count - 1;
  }
  return count;
};

module.exports = mySqrt;
