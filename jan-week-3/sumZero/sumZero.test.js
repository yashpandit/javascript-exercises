const sumZero = require('./sumZero');

describe('sumZero', () => {

  test('should return correct output', () => {
    expect(sumZero(5)).toEqual([1, -1, 2, -2, 0]);
  });

});