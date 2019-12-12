const plusOne = require('./plusOne');

describe('plus one', () => {
  test('should return empty array if the input is empty', () => {
    expect(plusOne([])).toEqual([]);
  });

  test('should return plus one of the given array', () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
    expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
  });
});