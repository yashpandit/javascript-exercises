const replaceElements = require('./replaceElements');

describe('replaceElements', () => {

  test('should return elements replaced', () => {
    expect(replaceElements([17, 18, 5, 4, 6, 1])).toEqual([18, 6, 6, 6, 1, -1]);
  });

});
