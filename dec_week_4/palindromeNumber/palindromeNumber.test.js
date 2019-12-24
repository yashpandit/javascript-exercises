const isPalindrome = require('./palindromeNumber');

describe('palindromeNumber', () => {

  test('should return false if input is not palindrome', () => {
    expect(isPalindrome(123)).toBe(false);
    expect(isPalindrome(120)).toBe(false);
  });

  test('should return false if input is signed', () => {
    expect(isPalindrome(-123)).toBe(false);
  });

  test('should return true if input is palindrome', () => {
    expect(isPalindrome(121)).toBe(true);
  });

});
