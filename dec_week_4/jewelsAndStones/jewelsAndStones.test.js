const numJewelsInStones = require('./jewelsAndStones');

describe('jewelsAndStones', () => {

  test('should return count of jewels among stones', () => {
    expect(numJewelsInStones("aA", "aAAZZZZ")).toBe(3);
  });

  test('should return 0 if no jewels found', () => {
    expect(numJewelsInStones("z", "ZZ")).toBe(0);
  });

});