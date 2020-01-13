const heightChecker = (heights) => {
  let sorted = heights.slice().sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < sorted.length; i++) {
    if (heights[i] !== sorted[i]) {
      count++;
    }
  }
  return count;
};

module.exports = heightChecker;
