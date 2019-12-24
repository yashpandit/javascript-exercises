const reverse = (number) => {
  let reverseNumber = 0;
  let sign = number < 0;
  number = Math.abs(number);

  while (number) {
    reverseNumber = reverseNumber * 10 + (number % 10);
    number = Math.floor(number / 10);
  }

  return reverseNumber > Math.pow(2, 31)
    ? 0
    : sign
      ? -reverseNumber
      : reverseNumber;
};

module.exports = reverse;
