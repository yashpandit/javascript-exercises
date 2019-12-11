const subtractProductAndSum = (n) => {
  const digits = n.toString().split('').map(Number);
  const multiplication = digits.reduce((mul, digit) => mul * digit, 1);
  const sum = digits.reduce((total, digit) => total + digit, 0);
  const difference = multiplication - sum;
  return difference;
};

module.exports = subtractProductAndSum;