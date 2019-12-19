const rotate = (numbers, k) => {
  //     let removedElement = 0;

  //     for (let i = 0; i < k; i++) {
  //         removedElement = numbers.pop();
  //         numbers.splice(0, 0, removedElement);
  //     }
  numbers.unshift(...numbers.splice(numbers.length - k));

  return numbers;
};

module.exports = rotate;
