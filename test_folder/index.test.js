const returnName = require('./index');

describe('test run', () => {
  test('should return Yash', () => {
    expect(returnName()).toBe('Yash');
  });
});