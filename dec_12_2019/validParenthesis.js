const isValid = (string) => {
  if (string === "") {
    return true;
  }
  const letters = string.split("");
  const brackets = [];
  const endBrackets = [];
  const openingBrackets = ["[", "{", "("];
  const closingBrackets = ["]", "}", ")"];

  for (let i = 0; i < letters.length; i++) {
    if (openingBrackets.includes(letters[i])) {
      brackets.push(letters[i]);
    }
    if (closingBrackets.includes(letters[i])) {
      endBrackets.push(letters[i]);
    }
    if (
      closingBrackets.includes(letters[i]) &&
      closingBrackets.indexOf(endBrackets[0]) ===
      openingBrackets.indexOf(brackets[brackets.length - 1])
    ) {
      brackets.pop();
      endBrackets.shift();
    }
  }
  if (brackets.length === 0 && endBrackets.length === 0) {
    return true;
  }
  return false;
};

module.exports = isValid;
