const majorityElement = require('./majorityElement');

describe('majorityElement', () => {

  test('should return -1 if no element is found', () => {
    expect(majorityElement([3, 2, 4])).toBe(-1);
  });

  test('should return the element whose frequency is gte n/2', () => {
    expect(majorityElement([3, 2, 3])).toBe(3);
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
  });

});