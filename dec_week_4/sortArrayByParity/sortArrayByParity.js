const sortArrayByParity = (A) => {
  let even = [];
  let odd = [];
  for (let number of A) {
    if (number % 2 === 0) {
      even.push(number);
    } else {
      odd.push(number);
    }
  }
  return even.concat(odd);
};

module.exports = sortArrayByParity;
