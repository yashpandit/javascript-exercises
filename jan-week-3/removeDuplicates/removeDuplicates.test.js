const removeDuplicates = require('./removeDuplicates');

describe('removeDuplicates', () => {

  test('should return result with duplicates removed', () => {
    expect(removeDuplicates("abbaca")).toBe("ca");
  });

});