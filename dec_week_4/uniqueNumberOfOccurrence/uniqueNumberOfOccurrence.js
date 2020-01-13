const uniqueOccurrences = (arr) => {
  let occurrenceMap = {};

  for (let number of arr) {
    occurrenceMap[number] = occurrenceMap[number] ? occurrenceMap[number] + 1 : 1;
  }

  let values = Object.values(occurrenceMap).sort();

  for (let i = 0; i < values.length; i++) {
    if (values[i] === values[i + 1]) {
      return false;
    }
  }
  return true;
};

module.exports = uniqueOccurrences;
