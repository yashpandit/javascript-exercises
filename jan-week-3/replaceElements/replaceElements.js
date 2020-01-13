const replaceElements = (arr) => {
  if (arr.length === 1) return [-1];

  const len = arr.length;

  let currentMax = -1;
  let prevMax = Number.MIN_SAFE_INTEGER;

  for (let i = len - 1; i >= 0; i--) {
    const currentValue = arr[i];
    arr[i] = currentMax;
    currentMax = Math.max(currentMax, currentValue);
  }

  return arr;
};

module.exports = replaceElements;
