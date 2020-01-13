const removeOuterParentheses = require('./removeOuterParentheses');

describe('removeOuterParentheses', () => {

  test('should return the result with outer paranthesis removed', () => {
    expect(removeOuterParentheses("(()())(())")).toBe("()()()");
  });

});