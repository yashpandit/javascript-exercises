const removeDuplicates = require('./removeDuplicates');

describe('remove duplicates in place', () => {
  test('should return 0 if the input is empty', () => {
    expect(removeDuplicates([])).toBe(0);
  });

  test('should return length after removing duplicates', () => {
    expect(removeDuplicates([1, 1, 2])).toBe(2);
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
  });
});