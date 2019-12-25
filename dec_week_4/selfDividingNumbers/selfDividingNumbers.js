const selfDividingNumbers = (left, right) => {
  let numbers = [];
  while (left <= right) {
    let leftCopy = left;
    let flag = false;
    while (leftCopy) {
      let remainder = leftCopy % 10;
      if (left % remainder === 0) {
        flag = true;
      } else {
        flag = false;
        break;
      }
      leftCopy = Math.floor(leftCopy / 10);
    }
    if (flag) {
      numbers.push(left);
    }
    left++;
  }
  return numbers;
};

module.exports = selfDividingNumbers;
