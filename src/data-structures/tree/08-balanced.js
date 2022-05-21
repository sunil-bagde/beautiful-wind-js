function getDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(getDepth(root.left), root.right);
}

function isBalanced(root) {
  if (!root) return 0;

  let leftDepth = getDepth(root.left);
  let rightDepth = getDepth(root.right);
  let balanced = Math.abs(leftDepth - rightDepth) <= 1;
  return balanced && isBalanced(root.left) && isBalanced(root.right);
}
