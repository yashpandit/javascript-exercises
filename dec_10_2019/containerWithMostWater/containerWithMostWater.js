const maxArea = (height) => {
  let area = 0;
  let i = 0;
  let j = height.length - 1;

  while (i < j) {
    const breadth = j - i;
    if (height[i] < height[j]) {
      area = Math.max(area, (breadth * height[i]));
      i++;
    } else {
      area = Math.max(area, (breadth * height[j]));
      j--;
    }
  }

  return area;
};

module.exports = maxArea;