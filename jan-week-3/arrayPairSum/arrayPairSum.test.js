const arrayPairSum = require('./arrayPairSum');

describe('arrayPairSum', () => {

  test('should return sum of pairs', () => {
    expect(arrayPairSum([1, 4, 3, 2])).toEqual(4);
  });

});