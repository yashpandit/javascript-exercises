const getSum = require('./sumWithoutOperators');

describe('sum without operators', () => {
  test('should return sum of the inputs', () => {
    expect(getSum(1, 3)).toBe(4);
    expect(getSum(15, 32)).toBe(47);
  });
});
