const rotate = require('./rotateArray');

describe('rotateArray', () => {

  test('should return rotated array', () => {
    expect(rotate([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

});