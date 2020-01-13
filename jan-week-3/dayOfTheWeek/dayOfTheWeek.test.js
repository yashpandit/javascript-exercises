const dayOfTheWeek = require('./dayOfTheWeek');

describe('dayOfTheWeek', () => {

  test('should return day of the week', () => {
    expect(dayOfTheWeek(31, 8, 2019)).toBe("Saturday");
  });

});