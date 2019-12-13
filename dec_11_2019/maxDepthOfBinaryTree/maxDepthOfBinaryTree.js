const maxDepth = (root) => {
  let leftDepth = 0;
  let rightDepth = 0;

  if (root == null) {
    return 0;
  } else {
    leftDepth = maxDepth(root.left);
    rightDepth = maxDepth(root.right);

    if (leftDepth > rightDepth) {
      return leftDepth + 1;
    } else {
      return rightDepth + 1;
    }
  }
};

module.exports = maxDepth;
