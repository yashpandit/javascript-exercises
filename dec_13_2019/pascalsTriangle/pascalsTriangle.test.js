const generatePascalTriangle = require('./pascalsTriangle');

describe("pascalsTriangle", () => {

  test("should return pascalsTriangle for valid input", () => {
    expect(generatePascalTriangle(5)).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1]
    ]);
  });

  test("should return [] if input is 0", () => {
    expect(generatePascalTriangle(0)).toEqual([]);
  });

  test("should return [[1]] if input is 1", () => {
    expect(generatePascalTriangle(1)).toEqual([[1]]);
  });

  test("should return [[1], [1, 1]] if input is 2", () => {
    expect(generatePascalTriangle(2)).toEqual([[1], [1, 1]]);
  });

});
