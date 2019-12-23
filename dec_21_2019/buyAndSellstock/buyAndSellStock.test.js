const maxProfit = require('./buyAndSellStock');

describe('buyAndSellStocks', () => {

  test('should return max profit for the given stock values', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
    expect(maxProfit([2, 4, 1])).toBe(2);
    expect(maxProfit([1, 2])).toBe(1);
  });

  test('should return 0 if the input is empty', () => {
    expect(maxProfit([])).toBe(0);
  });

});