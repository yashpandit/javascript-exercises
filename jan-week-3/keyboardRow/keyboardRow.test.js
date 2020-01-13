
const findWords = require('./keyboardRow');

describe('findWords', () => {

  test('should return the words', () => {
    expect(findWords(["Hello", "Alaska", "Dad", "Peace"])).toEqual(["Alaska", "Dad"]);
  });

});