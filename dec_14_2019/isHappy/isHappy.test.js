const isHappy = require('./isHappy');

describe('isHappy', () => {

  test('should return true if the number isHappy', () => {
    expect(isHappy(19)).toBe(true);
  });

});
