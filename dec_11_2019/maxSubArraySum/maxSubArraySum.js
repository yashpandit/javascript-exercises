const maxSubArraySum = (numbers) => {
  let maxSoFar = -Infinity;
  let maxEndingHere = 0;

  for (let i = 0; i < numbers.length; i++) {
    maxEndingHere += numbers[i];
    if (maxSoFar < maxEndingHere) {
      maxSoFar = maxEndingHere;
    }
    if (maxEndingHere < 0) {
      maxEndingHere = 0;
    }
  }

  return maxSoFar;
};

module.exports = maxSubArraySum;
