const trailingZeroes = require('./factorialTrailingZeroes');

describe('trailingZeroes', () => {

  test('should return number of trailing zeroes in a factorial', () => {
    expect(trailingZeroes(3)).toBe(0);
    expect(trailingZeroes(5)).toBe(1);
  });

});