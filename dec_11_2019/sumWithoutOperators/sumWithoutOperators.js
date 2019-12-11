const getSum = (number1, number2) => {
  let carry = 0;
  while (number2 !== 0) {
    carry = number1 & number2;
    number1 = number1 ^ number2;
    number2 = carry << 1;
  }
  return number1;
};

module.exports = getSum;
