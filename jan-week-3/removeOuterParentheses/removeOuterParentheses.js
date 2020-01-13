const removeOuterParentheses = (S) => {
  let level = 0;
  let res = "";

  for (let i = 0; i < S.length; ++i) {

    if (S[i - 1] === "(" && S[i] === "(") {
      level++;
    } else if (S[i - 1] === ")" && S[i] === ")") {
      level--;
    }

    if (level > 0) {
      res += S[i];
    }
  }

  return res;
};

module.exports = removeOuterParentheses;
