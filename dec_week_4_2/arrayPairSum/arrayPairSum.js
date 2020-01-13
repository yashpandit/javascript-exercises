const arrayPairSum = (nums) => {
  let sum = 0;
  const sorted = nums.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i += 2) {
    sum += sorted[i];
  }

  return sum;
};

module.exports = arrayPairSum;
