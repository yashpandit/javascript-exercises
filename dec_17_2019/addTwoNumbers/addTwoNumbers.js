class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const addTwoNumbers = (l1, l2) => {
  let l3 = {};
  let head = l3;
  let carry = 0;

  while (l1 || l2 || carry) {
    let sum = carry;

    const sumList = (l) => {
      if (l) {
        sum += l.val;
        return l.next;
      }
      return null;
    }

    l1 = sumList(l1);
    l2 = sumList(l2);

    if (sum > 9) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }

    head.next = new ListNode(sum);
    head = head.next;

  }

  return l3.next;
};

module.exports = {
  addTwoNumbers,
  ListNode,
};
