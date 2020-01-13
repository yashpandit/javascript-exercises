const minAddToMakeValid = (S) => {
  let result = 0;
  let balance = 0;
  let i = 0;
  
  while (i < S.length) {
      (S[i] === '(') ? balance++ : balance--;
      if (balance === -1) {
          result++;
          balance++;
      }
      i++;
  }
  
  return result + balance;
};