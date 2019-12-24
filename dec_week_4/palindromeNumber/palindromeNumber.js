const isPalindrome = (number) => {
  let copyOfN = number;
  let reverseNumber = 0;
  let sign = number < 0;

  if (sign === true) {
    return false;
  }
  number = Math.abs(number);

  while (number) {
    reverseNumber = reverseNumber * 10 + (number % 10);
    number = Math.floor(number / 10);
  }

  return reverseNumber == copyOfN ? true : false;
};

module.exports = isPalindrome;
