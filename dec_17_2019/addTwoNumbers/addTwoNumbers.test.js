const { addTwoNumbers, ListNode } = require('./addTwoNumbers');

describe('addTwoNumbers', () => {

  let l1 = new ListNode(2);
  l1.next = new ListNode(4);
  l1.next.next = new ListNode(3);

  let l2 = new ListNode(5);
  l2.next = new ListNode(6);
  l2.next.next = new ListNode(4);

  let l3 = new ListNode(7);
  l3.next = new ListNode(0);
  l3.next.next = new ListNode(8);

  test('should return the sum of two list as a list', () => {
    expect(addTwoNumbers(l1, l2)).toEqual(l3);
  });

});
