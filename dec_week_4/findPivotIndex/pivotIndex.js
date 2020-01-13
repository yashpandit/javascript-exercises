const pivotIndex = (numbers) => {
  let leftSum = 0;
  let sum = numbers.reduce((a, b) => a + b, 0);
  let len = numbers.length;

  for (let i = 0; i < len; i++) {
    if (leftSum === (sum - numbers[i] - leftSum)) {
      return i;
    }
    leftSum += numbers[i];
  }
  return -1;
};

module.exports = pivotIndex;
