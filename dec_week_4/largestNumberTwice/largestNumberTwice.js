const dominantIndex = (numbers) => {
  let max = Math.max(...numbers),
    len = numbers.length,
    flag = false;

  if (len === 1) return 0;

  for (let i = 0; i < len; i++) {
    if (numbers[i] === max) continue;
    if ((numbers[i] * 2) <= max) flag = true;
    else {
      flag = false;
      break;
    }
  }

  return (flag) ? numbers.indexOf(max) : -1;
};

module.exports = dominantIndex;
