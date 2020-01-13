const relativeSortArray = require('./relativeSortArray');

describe('relativeSortArray', () => {

  test('should return the relative sorted array', () => {
    expect(relativeSortArray(
      [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
      [2, 1, 4, 3, 9, 6]))
      .toEqual([2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]);
  });

});