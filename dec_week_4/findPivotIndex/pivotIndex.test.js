const pivotIndex = require('./pivotIndex');

describe('pivotIndex', () => {

  test('should return the pivot index for the given input', () => {
    expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3);
  });

  test('should return -1 if the sum is not equal', () => {
    expect(pivotIndex([1, 2, 3])).toBe(-1);
  });

});