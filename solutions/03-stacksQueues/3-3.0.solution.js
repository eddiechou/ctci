class Stack {
  constructor() {
    this.data = [];
    this.top = 0;
  }

  push(val) {
    this.data[this.top++] = val;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.data[--this.top];
  }

  isEmpty() {
    return this.top === 0;
  }

  getLength() {
    return this.top;
  }
}