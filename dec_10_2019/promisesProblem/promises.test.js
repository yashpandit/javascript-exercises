const job = require('./promises');

describe('promises test', () => {
  test('should reject promise if input is not a number', () => {
    expect(job("hi")).rejects.toBe("error");
  });

  test('should reject promise if input is even number', () => {
    expect(job(2)).rejects.toBe("even");
  });

  test('should resolve promise if input is odd number', () => {
    expect(job(3)).resolves.toBe("odd");
  });
});