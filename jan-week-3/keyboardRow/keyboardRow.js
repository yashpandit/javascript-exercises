const top = /^[qwertyuiop]+$/i;
const mid = /^[asdfghjkl]+$/i;
const bottom = /^[zxcvbnm]+$/i;
const layouts = [top, mid, bottom];

const findWords = words =>
  words.filter(word => layouts.some(layout => layout.test(word)));

module.exports = findWords;
