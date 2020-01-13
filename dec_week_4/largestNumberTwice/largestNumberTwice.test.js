const dominantIndex = require('./largestNumberTwice');

describe('largestNumberTwice', () => {

  test('should return the index of the largest number which is more than twice the min number in the array', () => {
    expect(dominantIndex([3, 6, 1, 0])).toBe(1);
  });

  test('should return the -1 if no large number is found', () => {
    expect(dominantIndex([1, 2, 3, 4])).toBe(-1);
  });

});
