const removeDuplicates = (S) => {
  let letters = S.split('');

  for (let i = 1; i < letters.length;) {
    if (letters[i - 1] === letters[i]) {
      letters.splice(i - 1, 2);
      i = 1;
    } else {
      i++;
    }
  }

  return letters.join('');
};

// var removeDuplicates = function(S) {
//     let stack = []
//     const n = S.length

//     for (let i = 0; i < n; i++) {
//         if (stack.top() == S.charAt(i)) {
//             stack.pop()
//         } else stack.push(S.charAt(i))
//     }

//     return stack.join('')

// };

// Array.prototype.top = function() {
//     return this[this.length - 1]
// }

module.exports = removeDuplicates;
