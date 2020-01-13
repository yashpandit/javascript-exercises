const distributeCandies = (candies, num_people) => {
  let count = 0;
  let arr = Array(num_people).fill(0);
  while (candies > 0) {
    for (let i = 0; i < num_people; i++) {
      count += 1;
      if (candies - count > 0) {
        candies -= count;
        arr[i] += count;
      } else {
        arr[i] += candies;
        candies = 0;
      }
      if (candies <= 0) {
        break;
      }
    }
  }
  return arr;
};

module.exports = distributeCandies;
