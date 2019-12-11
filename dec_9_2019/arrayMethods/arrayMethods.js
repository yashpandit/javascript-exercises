const inBetween = (array, start, end) => {
  return array.filter(element => (element >= start && element <= end));
};

const inArray = (array, predicate) => {
  return array.filter(element => predicate.includes(element));
};

module.exports = {
  inArray,
  inBetween,
};