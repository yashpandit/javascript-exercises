const twoSum = (numbers, target) => {
  const indiceObj = {};

  for (let i = 0; i < numbers.length; i++) {
    if (indiceObj[numbers[i]] >= 0) {
      return [indiceObj[numbers[i]], i];
    }
    indiceObj[target - numbers[i]] = i;
  }
};

module.exports = twoSum;
