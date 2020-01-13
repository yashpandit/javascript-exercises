const distributeCandies = require('./distributeCandies');

describe('distributeCandies', () => {

  test('should return the distributed candies', () => {
    expect(distributeCandies(7, 4)).toEqual([1, 2, 3, 1]);
  });

});