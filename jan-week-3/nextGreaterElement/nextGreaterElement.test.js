const nextGreaterElement = require('./nextGreaterElement');

describe('nextGreaterElement', () => {

  test('should return next greater element', () => {
    expect(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])).toEqual([-1, 3, -1]);
  });

});