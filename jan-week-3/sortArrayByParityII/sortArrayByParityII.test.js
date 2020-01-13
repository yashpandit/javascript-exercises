const sortArrayByParityII = require('./sortArrayByParityII');

describe('sortArrayByParityII', () => {

  test('should return sorted array', () => {
    expect(sortArrayByParityII([4, 2, 5, 7])).toEqual([4, 5, 2, 7]);
  });

});