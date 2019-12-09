const subtractProductAndSum = require('./subtractProductAndSum');

describe('subtractProductAndSum', () => {
  test('should return the difference of product and sum', () => {
    expect(subtractProductAndSum(234)).toBe(15);
  });

  test('should return the difference of product and sum', () => {
    expect(subtractProductAndSum(4421)).toBe(21);
  });

  test('should return 0 when input is 0', () => {
    expect(subtractProductAndSum(0)).toBe(0);
  });
})