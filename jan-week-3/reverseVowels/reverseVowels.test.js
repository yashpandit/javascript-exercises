const reverseVowels = require('./reverseVowels');

describe('reverseVowels', () => {

  test('should return vowels reversed', () => {
    expect(reverseVowels("hello")).toBe("holle");
  });

});