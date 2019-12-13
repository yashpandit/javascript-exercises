const maxSubArraySum = require('./maxSubArraySum');

describe('maximum subArray sum', () => {
  test('should return the max subarray sum', () => {
    expect(maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });

  test('should return value if the input length is 1', () => {
    expect(maxSubArraySum([-1])).toBe(-1);
  });
});
