const balancedStringSplit = require('./balancedStringSplit');

describe('balancedStringSplit', () => {

  test('should return 0 when input is empty string', () => {
    expect(balancedStringSplit("")).toBe(0);
  });

  test('should return the number of balanced string', () => {
    expect(balancedStringSplit("RLRRLLRLRL")).toBe(4);
  });

  test('should return the number of balanced string', () => {
    expect(balancedStringSplit("RLLLLRRRLR")).toBe(3);
  });

  test('should return the number of balanced string', () => {
    expect(balancedStringSplit("LLLLRRRR")).toBe(1);
  });

  test('should return the number of balanced string', () => {
    expect(balancedStringSplit("RLRRRLLRLL")).toBe(2);
  });
})