const reverse = require('./reverseInteger');

describe('reverseInteger', () => {

  test('should return the reversed integer', () => {
    expect(reverse(123)).toBe(321);
  });

  test('should return the reversed integer with sign', () => {
    expect(reverse(-123)).toBe(-321);
  });

  test('should return the reversed integer without zero as starting digit', () => {
    expect(reverse(120)).toBe(21);
  });

});
