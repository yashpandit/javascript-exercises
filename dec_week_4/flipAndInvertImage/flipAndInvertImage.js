const flipAndInvertImage = (A) => {
  let result = [];
  for (let array of A) {
    result.push(array.reverse().map((ele) => ele === 1 ? 0 : 1));
  }
  return result;
};

// const flipAndInvertImage = A => A.map(row => row.map(val => val ^ 1).reverse());

module.exports = flipAndInvertImage;
