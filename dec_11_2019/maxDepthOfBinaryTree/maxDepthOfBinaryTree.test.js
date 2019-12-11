const maxDepth = require('./maxDepthOfBinaryTree');

describe('maxDepthOfBinaryTree', () => {

  class Node {
    constructor(data) {
      this.data = data;
      this.right = null;
      this.left = null;
    }
  }

  const root = new Node(3);
  root.right = new Node(20);
  root.left = new Node(9);
  const rightNode = root.right;
  rightNode.right = new Node(7);
  rightNode.left = new Node(15);

  test('should return the max depth of binary tree', () => {
    expect(maxDepth(root)).toBe(3);
  });

});
