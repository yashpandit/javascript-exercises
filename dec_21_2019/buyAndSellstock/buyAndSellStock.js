const maxProfit = (prices) => {
  let min = prices[0];
  let max = 0;
  for (let price of prices) {
    if (price < min) {
      min = price;
    }
    else if (price - min > max) {
      max = price - min;
    }
  }
  return max;
};

module.exports = maxProfit;