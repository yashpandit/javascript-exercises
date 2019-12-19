const climbStairs = require('./climbStairs');

describe('climbStairs', () => {

  test('should return number of ways to climb stairs', () => {
    expect(climbStairs(1)).toBe(1);
    expect(climbStairs(2)).toBe(2);
    expect(climbStairs(3)).toBe(3);
  });

});
