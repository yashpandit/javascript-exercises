const indexOfShortestString = (strings) => {
  const firstString = strings[0];
  const shortestString = strings.reduce((acc, curr) => {
    if (curr.length < acc.length) {
      acc = curr;
    }
    return acc;
  }, firstString);
  return strings.indexOf(shortestString);
};


const getLongestCommonPrefix = (strings) => {
  const allStrings = [...strings];
  if (allStrings.length === 0) {
    throw new Error('Input cannot be empty array!');
  }
  if (allStrings.length === 1) {
    return allStrings[0];
  }
  const shortestString = allStrings.splice(indexOfShortestString(strings), 1)[0];
  let longestCommonPrefix = '';
  for (let i = 0; i < shortestString.length; i++) {
    const currentCharacter = shortestString[i];
    for (let j = 0; j < allStrings.length; j++) {
      if (allStrings[j][i] !== currentCharacter) {
        return longestCommonPrefix;
      }
    }
    longestCommonPrefix += currentCharacter;
  }
  return longestCommonPrefix;
};

module.exports = getLongestCommonPrefix;
