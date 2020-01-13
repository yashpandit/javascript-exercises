const findDisappearedNumbers = require('./findDisappearedNumbers');

describe('findDisappearedNumbers', () => {

  test('should return disappeared numbers', () => {
    expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6]);
  });

});