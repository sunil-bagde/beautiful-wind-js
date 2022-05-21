/*
      3         
    9   20

  10   15   7 

*/
/*

  DFS
  depth by elevel
  if left go to left
  if right go to right 
  the pop up queue LIFO
  [3]
  [9]
  [10]
  [20]
  [15]
  [7]
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
root.right.right.left = new Node(10);

function maxDepth(root) {
  if (!root) return 0;

  let q = [root];
  let depth = 0;
  while (q.length) {
    let size = q.length;
    depth++;
    while (size--) {
      let node = q.shift();
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
  }
  return depth;
}

let r = maxDepth(root);
console.log("max depth = ", r);
