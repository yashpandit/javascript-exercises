const twoSum = require('./twoSum');

describe('twoSum', () => {

  test('should return the indices of the elements resulting to target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

});