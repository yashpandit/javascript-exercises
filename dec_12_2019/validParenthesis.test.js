const isValid = require("./validParenthesis");

describe("matchBrackets", () => {
  test("should return true for empty string", () => {
    expect(isValid("")).toBe(true);
  });

  test("should return true if brackets are balanced", () => {
    expect(isValid("[][[]]")).toBe(true);
  });

  test("should return true if brackets are balanced", () => {
    expect(isValid("[ab]{cde}")).toBe(true);
  });

  test("should return false if brackets are not balanced", () => {
    expect(isValid("(abv#$dg)[]]")).toBe(false);
  });

  test("should return false if brackets are not balanced", () => {
    expect(isValid("(abv#$dg[)]]")).toBe(false);
  });
});