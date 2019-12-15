const singleNumber = (numbers) => {
  const frequency = {};

  for (let number of numbers) {
    if (!frequency[number]) {
      frequency[number] = 0;
    }
    frequency[number]++;
  }

  for (let key of Object.keys(frequency)) {
    if (frequency[key] === 1) {
      return Number(key);
    }
  }
};

module.exports = singleNumber;
