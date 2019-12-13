const getSum = (operand1, operand2) => {
  let carry = 0;
  while (operand2 !== 0) {
    carry = operand1 & operand2;
    operand1 = operand1 ^ operand2;
    operand2 = carry << 1;
  }
  return operand1;
};

module.exports = getSum;
