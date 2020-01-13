const repeatedNTimes = (A) => {
  let frequency = A.reduce((acc, num) => {
    acc[num] = acc[num] ? acc[num] + 1 : 1;
    return acc;
  }, {});

  let len = Math.floor(A.length / 2);
  for (let num of A) {
    if (frequency[num] === len) {
      return num;
    }
  }
};

module.exports = repeatedNTimes;
