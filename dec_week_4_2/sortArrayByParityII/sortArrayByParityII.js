const sortArrayByParityII = (arr) => {
  let len = arr.length;
  let res = new Array(len);
  let evenIndex = 0;
  let oddIndex = 1;

  for (let i = 0; i < len; i++) {
    if (arr[i] % 2 === 0) {
      res[evenIndex] = arr[i];
      evenIndex = evenIndex + 2;
    } else {
      res[oddIndex] = arr[i];
      oddIndex = oddIndex + 2;
    }
  }

  return res;
};

module.exports = sortArrayByParityII;
