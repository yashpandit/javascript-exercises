const findDisappearedNumbers = (nums) => {
  //     let map = {};
  //     let result = [];

  //     for (let number of nums) {
  //         map[number] = map[number] ? map[number] += 1 : 1;
  //     }

  //     for (let i = 1; i <= nums.length; i++) {
  //         if (!map[i]) {
  //             result.push(i);        
  //         }
  //     }

  //     return result;
  let res = []
  nums.forEach((val, ind, arr) => {
    let tmp = Math.abs(arr[ind]) - 1;
    if (arr[tmp] > 0)
      arr[tmp] *= -1;
  })
  console.log(nums);
  nums.forEach((val, ind) => {
    if (val > 0)
      res.push(ind + 1)
  })
  return res
};

module.exports = findDisappearedNumbers;
