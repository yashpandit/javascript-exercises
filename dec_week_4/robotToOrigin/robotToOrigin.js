const judgeCircle = (moves) => {
  let horizontal = 0;
  let vertical = 0;

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'U') {
      vertical++;
    } else if (moves[i] === 'D') {
      vertical--;
    } else if (moves[i] === 'R') {
      horizontal++;
    } else if (moves[i] === 'L') {
      horizontal--;
    }
  }

  return (vertical === 0 && horizontal === 0) ? true : false;
};

module.exports = judgeCircle;
