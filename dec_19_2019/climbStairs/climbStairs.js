const climbStairs = (steps) => {
  if (steps <= 2) {
    return steps;
  }
  let x = 1;
  let y = 2;

  let temp;
  for (let i = 3; i <= steps; i++) {
    temp = x + y;
    x = y;
    y = temp;
  }
  return temp;
};

module.exports = climbStairs;
