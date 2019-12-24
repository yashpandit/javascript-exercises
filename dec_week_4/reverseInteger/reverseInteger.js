const reverse = (n) => {
  let reverseNumber = 0;
  let sign = n < 0;
  n = Math.abs(n);
  while (n) {
    reverseNumber = reverseNumber * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return reverseNumber > 0x7FFFFFFF
    ? 0
    : sign
      ? -reverseNumber
      : reverseNumber;
};

module.exports = reverse;
