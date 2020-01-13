const getAllElements = (root1, root2) => {
  let arr1 = [];
  let arr2 = [];

  return merge(extract(root1, arr1), extract(root2, arr2));
};

// Merge from merge sort because initial function returns a sorted array
const merge = (a1, a2) => {
  let res = [...a1, ...a2];
  return res.sort((a, b) => a - b);
};

// In-order traversal, returns a sorted array on a BST
const extract = (node, array) => {
  if (node == null) {
    return [];
  }
  array.push(node.val);
  extract(node.left, array);
  extract(node.right, array);
  return array;
};

module.exports = getAllElements;
