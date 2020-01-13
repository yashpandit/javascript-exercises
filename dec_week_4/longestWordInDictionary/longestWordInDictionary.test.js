const longestWord = require('./longestWordInDictionary');

describe('longestWord', () => {

  test('should return the longest word', () => {
    expect(longestWord(["w", "wo", "wor", "worl", "world"])).toBe('world');
    expect(longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"])).toBe('apple');
  });

});
