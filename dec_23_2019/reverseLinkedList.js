const reverseList = (head) => {
  if (head == null) return null;

  let current = head.next;
  let root = head;
  head.next = null;
  while (current != null) {
    const next = current.next;
    current.next = root;
    root = current;
    current = next;
  }

  return root;
};

module.exports = reverseList;
