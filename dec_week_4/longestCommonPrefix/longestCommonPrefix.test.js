const longestCommonPrefix = require('./longestCommonPrefix');

describe('longestCommonPrefix', () => {

  test('should return the longest prefix', () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  });

  test('should return empty string is input is empty', () => {
    expect(longestCommonPrefix([])).toBe("");
  });

});