const getSum = require('./sumWithoutPlus');

describe('sum without operators', () => {
  test('should return sum of the inputs', () => {
    expect(getSum(1, 2)).toBe(3);
    expect(getSum(15, 32)).toBe(47);
  });
});