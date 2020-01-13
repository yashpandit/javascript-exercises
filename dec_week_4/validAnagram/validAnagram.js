// const getFreq = (s) => s.reduce((acc, curr) => {
//   acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
//   return acc;
// }, {});

// const getSize = (obj) => {
//   var size = 0, key;
//   for (key in obj) {
//     if (obj.hasOwnProperty(key)) size++;
//   }
//   return size;
// };

// const checkEquality = (s, t) => {
//   for (let key in s) {
//     if (!t.hasOwnProperty(key) || s[key] !== t[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// const eqObject = (s, t) => {
//   let sizeS = getSize(s);
//   let sizeT = getSize(t);

//   if (sizeS > sizeT) {
//     return checkEquality(s, t);
//   }

//   return checkEquality(t, s);
// };

// const isAnagram = (s, t) => {
//   const mapS = getFreq(s.split(''));
//   const mapT = getFreq(t.split(''));

//   return eqObject(mapS, mapT);
// };

const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  let arr = [...Array(26)].fill(0);
  let codeA = "a".charCodeAt(0);
  for (let i = 0; i < s.length; i++) {
    arr[s.charCodeAt(i) - codeA]++;
    arr[t.charCodeAt(i) - codeA]--;
  }

  return arr.every(el => el === 0);
};

module.exports = isAnagram;
