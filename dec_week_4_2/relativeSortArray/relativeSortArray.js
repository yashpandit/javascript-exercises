const relativeSortArray = (arr1, arr2) => {
  let frequency = arr1.reduce((acc, num) => {
    acc[num] = acc[num] ? acc[num] + 1 : 1;
    return acc;
  }, {});

  let len = arr2.length;
  let relativeArray = [];

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < frequency[arr2[i]]; j++) {
      relativeArray.push(arr2[i]);
      let index = arr1.indexOf(arr2[i]);
      arr1.splice(index, 1);
    }
  }

  arr1.sort((a, b) => a - b);
  return relativeArray.concat(arr1);
};

module.exports = relativeSortArray;
