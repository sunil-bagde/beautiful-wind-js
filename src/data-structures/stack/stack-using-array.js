class Stack {
  constructor() {
    this.stack = [];
    this.top = -1;
  }
  push(value) {
    this.top++;
    this.stack[this.top] = value;
    return this.top;
  }

  pop() {
    if (this.top === -1) {
      console.log("Stack is empty.");
    } else {
      this.stack[this.top] = null;
      this.top--;
    }
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

stack.pop();

console.log("stack", stack);
