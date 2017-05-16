class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToTail(val) {
    var node = new Node(val);
    this.length++;
    if (this.head === null) {
      this.head = node;
      return;
    }
    let p = this.head;
    while (p.next != null) {
      p = p.next;
    }
    p.next = node;
  }


  getLength() {
    return this.length;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}