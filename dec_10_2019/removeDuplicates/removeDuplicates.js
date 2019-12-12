const removeDuplicates = (nums) => {
  let i = 0;
  while (i < nums.length) {
    if (nums[i - 1] === nums[i]) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  return nums.length;
};

module.exports = removeDuplicates;