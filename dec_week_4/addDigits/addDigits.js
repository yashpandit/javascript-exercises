// const addDigits = (num) => {
//   let result = 0;

//   while (num >= 10) {
//     result += num % 10;
//     num = Math.floor(num / 10);

//     if (num < 10) {
//       num += result;
//       result = 0;
//     }
//   }

//   return num;
// };

const addDigits = (num) => {
  if (isNaN(num) || num === 0) return 0;
  if (num < 10) return num;

  return num % 9 === 0 ? 9 : num % 9;
};

module.exports = addDigits;
