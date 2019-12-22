const getLongestCommonPrefix = require('./longestCommonPrefix');

describe('longest common prefix of given strings', () => {
  test('should throw error if empty array passed as input', () => {
    expect(() => { getLongestCommonPrefix([]); }).toThrow('Input cannot be empty array!');
  });

  test('should return correct output', () => {
    expect(getLongestCommonPrefix(['wordless'])).toBe('wordless');
    expect(getLongestCommonPrefix(['geeksforgeeks', 'geeks', 'geek', 'geezer'])).toBe('gee');
    expect(getLongestCommonPrefix(['apple', 'ape', 'april'])).toBe('ap');
    expect(getLongestCommonPrefix(['nap', 'nata', 'nop'])).toBe('n');
    expect(getLongestCommonPrefix(['dap', 'nata', 'nop'])).toBe('');
  });

});