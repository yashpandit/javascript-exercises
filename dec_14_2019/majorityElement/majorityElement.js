const majorityElement = (numbers) => {
  const frequency = {};
  const halfLength = numbers.length / 2;

  for (let n of numbers) {
    if (frequency[n] === undefined) {
      frequency[n] = 0;
    }

    frequency[n]++;

    if (frequency[n] > halfLength) {
      return n;
    }
  }

  return -1;

};

module.exports = majorityElement;
