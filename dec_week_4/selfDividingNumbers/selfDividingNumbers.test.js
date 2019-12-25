const selfDividingNumbers = require('./selfDividingNumbers');

describe('selfDividingNumbers', () => {

  test('should return list of self diving numbers', () => {
    expect(selfDividingNumbers(1, 22)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]);
  });

});