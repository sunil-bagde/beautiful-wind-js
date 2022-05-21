/*
      3         
    9   20

  10   15   7 

*/
/*

  BFS
  level by elevel
  left to right 
  [3]
  [9,20]
  [10,15,7]
*/

function Node(value) {
  this.value = value;
  this.left = this.right = null;
}
let root = new Node(3);
root.left = new Node(9);
root.left.left = new Node(9);

//r
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);
function levelOrder(root) {
  if (!root) return [];
  let q = [root];
  let levels = [];

  while (q.length) {
    let size = q.length;
    let level = [];
    while (size--) {
      let node = q.shift();
      level.push(node.value);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    levels.push(level);
  }
  return levels;
}

let r = levelOrder(root);
console.log("level order = ", r);
