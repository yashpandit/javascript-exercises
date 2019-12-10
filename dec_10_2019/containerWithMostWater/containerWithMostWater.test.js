const maxArea = require('./containerWithMostWater');

describe('container with most water', () => {
  test('should return 0 if the input is empty', () => {
    expect(maxArea([])).toBe(0);
  });

  test('should return max capacity of water', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
    expect(maxArea([3, 9, 3, 4, 7, 2, 12, 6])).toBe(45);
  });
});