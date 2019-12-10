const plusOne = (digits) => {
  let len = digits.length - 1;
  let carry = 0;

  for (let i = len; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
      carry = 1;
      if (i === 0 && carry) digits.unshift(1);
    } else {
      digits[i] = digits[i] + 1;
      break;
    }
  }
  return digits;
};

module.exports = plusOne;