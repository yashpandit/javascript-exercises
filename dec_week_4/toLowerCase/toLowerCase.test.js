const toLowerCase = require('./toLowerCase');

describe('toLowerCase', () => {

  test('should return lower case of the input', () => {
    expect(toLowerCase("Hello")).toBe("hello");
    expect(toLowerCase("here")).toBe("here");
    expect(toLowerCase("LOVELY")).toBe("lovely");
  });

});