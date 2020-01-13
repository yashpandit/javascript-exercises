const heightChecker = require('./heightChecker');

describe('heightChecker', () => {

  test('should return the height in ascending order', () => {
    expect(heightChecker([1, 1, 4, 2, 1, 3])).toEqual(3);
  });

});