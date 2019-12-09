const { inBetween, inArray } = require('./arrayMethods');

describe('balancedStringSplit', () => {

  const arr = [1, 2, 3, 4, 5, 6, 7];

  test('should return element inBetween the range specified', () => {
    expect(inBetween(arr, 3, 6)).toEqual([3, 4, 5, 6]);
  });

  test('should return the element inArray from the list', () => {
    expect(inArray(arr, [1, 2, 10])).toEqual([1, 2]);
  });

});