// no arrays, that'd be cheating.

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

export default class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }
  append(value) {
    const node = new Node(value);
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  at(index) {
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  pop() {
    secondLast = this.at(--this.size);
    this.tail = secondLast;
    secondLast.next = null;
  }
  contains(value) {
    const found = this.find(value);
    return found === 0 ? true : !!found;
  }
  find(value) {
    let currentNode = this.head;
    for (let i = 0; i < this.size; i++) {
      if (currentNode.value === value) return i;
      currentNode = currentNode.next;
    }
    return null;
  }
  toString() {
    let string = "";
    let currentNode = this.head;
    while (true) {
      if (!currentNode) {
        string += "null";
        break;
      }
      string += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.next;
    }
    return string;
  }
}
