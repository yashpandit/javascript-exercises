const nextGreaterElement = (nums1, nums2) => {
  let nums2NextGrList = {}

  for (let i = 0; i < nums2.length; i += 1) {
    let currIndex = i + 1;
    while (nums2[currIndex] < nums2[i]) currIndex += 1;
    nums2NextGrList[nums2[i]] = currIndex === nums2.length ? -1 : nums2[currIndex];
  }

  let result = [];

  for (let i = 0; i < nums1.length; i += 1) {
    result.push(nums2NextGrList[nums1[i]]);
  }

  return result;
};

module.exports = nextGreaterElement;
