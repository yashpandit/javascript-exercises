const reverseWords = require('./reverseWords');

describe('reverseWords', () => {

  test('should return reverse of the words conserving white space', () => {
    expect(reverseWords("Let's take LeetCode contest")).toBe("s'teL ekat edoCteeL tsetnoc");
  });

});