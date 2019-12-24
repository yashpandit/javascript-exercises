const isPalindrome = (n) => {
  let copyOfN = n;
  let reverseNumber = 0;
  let sign = n < 0;
  if (sign === true) {
    return false;
  }
  n = Math.abs(n);

  while (n) {
    reverseNumber = reverseNumber * 10 + (n % 10);
    n = Math.floor(n / 10);
  }

  return reverseNumber == copyOfN ? true : false;
};

module.exports = isPalindrome;
