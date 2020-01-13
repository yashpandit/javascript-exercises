const minimumAbsDifference = (arr) => {
  arr.sort((a, b) => a - b);
  let differences = [];
  let minDiff = Infinity;
  let i = 1;

  while (i < arr.length) {
    let currentDiff = Math.abs(arr[i - 1] - arr[i]);

    if (currentDiff < minDiff) {
      differences = [[arr[i - 1], arr[i]]];
      minDiff = currentDiff;
    } else if (currentDiff === minDiff) {
      differences.push([arr[i - 1], arr[i]]);
    }
    i++;
  }

  return differences;
};

module.exports = minimumAbsDifference;
