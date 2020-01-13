const findOccurrences = require('./findOcurrences');

describe('findOccurrences', () => {

  test('should return occurrences', () => {
    expect(findOccurrences("alice is a good girl she is a good student", "a", "good")).toEqual(["girl", "student"]);
  });

});