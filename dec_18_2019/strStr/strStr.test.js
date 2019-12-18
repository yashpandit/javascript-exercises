const strStr = require('./strStr');

describe('strStr', () => {

  test('should return 0 if the second argument is empty', () => {
    expect(strStr('hello', '')).toBe(0);
  });

  test('should return first occurrence of substring', () => {
    expect(strStr('hello', 'll')).toBe(2);
    expect(strStr('==', '==')).toBe(0);
  });

  test('should return -1 if no substring is found', () => {
    expect(strStr('hello', 'dd')).toBe(-1);
  });

});