const sortArrayByParity = require('./sortArrayByParity');

describe('sortArrayByParity', () => {

  test('should return array by parity', () => {
    expect(sortArrayByParity([3, 1, 2, 4])).toEqual([2, 4, 3, 1]);
  });

});