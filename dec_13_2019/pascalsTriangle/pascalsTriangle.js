const generatePascalsTriangle = (numRows) => {
  let pascalsTriangle = [];
  if (numRows === 0) {
    return pascalsTriangle;
  }

  pascalsTriangle.push([1]);
  if (numRows === 1) {
    return pascalsTriangle;
  }

  pascalsTriangle.push([1, 1]);
  if (numRows === 2) {
    return pascalsTriangle;
  }

  for (let i = 2; i < numRows; i++) {
    let tempArray = new Array(i);
    tempArray[0] = 1;
    tempArray[i] = 1;
    for (let j = 1; j < pascalsTriangle[i - 1].length; j++) {
      tempArray[j] = pascalsTriangle[i - 1][j] + pascalsTriangle[i - 1][j - 1];
    }
    pascalsTriangle.push(tempArray);
  }

  return pascalsTriangle;
};

module.exports = generatePascalsTriangle;
