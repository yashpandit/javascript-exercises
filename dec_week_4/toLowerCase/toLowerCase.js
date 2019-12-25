const generateAlphabetsMap = () => {
  let charArray = {};
  for (let i = 0; i < 26; i++) {
    charArray[String.fromCharCode(65 + i)] = String.fromCharCode(97 + i);
  }
  return charArray;
};

const toLowerCase = (str) => {
  let string = str.split('');
  let alphabetsMap = generateAlphabetsMap();
  let result = '';
  for (let s of string) {
    if (alphabetsMap[s] !== undefined) {
      result += alphabetsMap[s];
    } else {
      result += s;
    }
  }
  return result;
};

module.exports = toLowerCase;
