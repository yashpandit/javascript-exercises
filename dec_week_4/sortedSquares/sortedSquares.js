// const sortedSquares = (A) => {
//   const result = [];
//   let head = 0;
//   let tail = A.length - 1;

//   while (head <= tail) {
//     if (A[head] ** 2 > A[tail] ** 2) result.push(A[head++] ** 2);
//     else result.push(A[tail--] ** 2);
//   }

//   return result.reverse();
// };

const sortedSquares = (A) =>
  A
    .map((number) => Math.abs(number * number))
    .sort((a, b) => a - b);

module.exports = sortedSquares;
