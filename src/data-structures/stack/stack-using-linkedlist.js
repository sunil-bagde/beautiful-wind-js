class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }
  push(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }
  pop() {
    if (this.head === null) {
      console.log("Stack is empty.");
      return null;
    }
    console.log("Current popped element: ", this.head.value);
    this.head = this.head.next;
  }
}
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
// stack.pop(); stack is empty

console.log("stack", stack);
