const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getPrimeCount = (range) => {
  let count = 0;
  for (let i = 2; i <= range; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
};

const numPrimeArrangements = (n) => {
  const modValue = Math.pow(10, 9) + 7;
  let totalPrimes = getPrimeCount(n);
  let notPrimes = n - totalPrimes;
  let result = 1;

  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) {
      result = result * totalPrimes % modValue;
      totalPrimes--;
    } else {
      result = result * notPrimes % modValue;
      notPrimes--;
    }
  }
  return result % modValue;
};

module.exports = numPrimeArrangements;
