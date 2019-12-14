const mySqrt = require('./mySqrt');

describe('mySqrt', () => {

  test('should return the sqrt of given input', () => {
    expect(mySqrt(4)).toBe(2);
    expect(mySqrt(8)).toBe(2);
  });

});