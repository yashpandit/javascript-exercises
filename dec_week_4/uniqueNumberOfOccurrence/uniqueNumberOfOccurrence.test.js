const uniqueOccurrences = require('./uniqueNumberOfOccurrence');

describe('uniqueOccurrences', () => {

  test('should return true if number of occurrences are unique', () => {
    expect(uniqueOccurrences([1, 2, 2, 1, 1, 3])).toBe(true);
    expect(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])).toBe(true);
  });

  test('should return false if number of occurrences are not unique', () => {
    expect(uniqueOccurrences([1, 2, 2, 1, 1, 3, 3])).toBe(false);
  });

});