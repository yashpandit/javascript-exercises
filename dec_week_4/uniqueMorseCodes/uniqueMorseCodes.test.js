const uniqueMorseRepresentations = require('./uniqueMorseCodes');

describe('uniqueMorseRepresentations', () => {

  test('should return the number of unique transformations', () => {
    expect(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])).toBe(2);
  });

  test('should return 0 if the input is empty', () => {
    expect(uniqueMorseRepresentations([])).toBe(0);
  });

});