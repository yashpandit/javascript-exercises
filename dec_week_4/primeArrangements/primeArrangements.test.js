const numPrimeArrangements = require('./primeArrangements');

describe('numPrimeArrangements', () => {

  test('should return the permutation of prime arrangement', () => {
    expect(numPrimeArrangements(5)).toBe(12);
    expect(numPrimeArrangements(100)).toBe(682289015);
  });

});