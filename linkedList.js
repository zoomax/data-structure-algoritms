class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (!this.isEmpty()) {
      node.next = this.head;
    }
    this.head = node;
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size - 1) return;
    if (index === 0) {
      this.prepend(value);
      return;
    }
    const node = new Node(value);
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentIndex < index - 1) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    node.next = currentNode.next;
    currentNode.next = node;
    this.size++;
  }

  removeByIndex(index) {
    if (index < 0 || this.size <= index) return null;
    let node = this.head;
    if (index === 0) {
      this.head = this.head.next;
    } else {
      for (let i = 0; i < index - 1; i++) {
        node = node.next;
      }
      node.next = node.next.next;
    }
    this.size--;
    return node.value;
  }
  removeByValue(value) {
    if (this.isEmpty()) return null;
    let curr = this.head;
    let prev = null;
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return curr.value;
    }
    for (let i = 0; i < this.getSize(); i++) {
      if (curr.value !== value) {
        prev = curr;
        curr = curr.next;
      } else {
        prev.next = curr.next;
        this.size--;
        return curr.value;
      }
    }
    return null;
  }

  searchByValue(value) {
    let index = 0;
    let temp = this.head;
    while (temp !== null) {
      if (temp.value === value) {
        return index;
      }
      temp = temp.next;
      index++;
    }
    return -1;
  }

  /// reverse linked list
  reverse() {
    let current = this.head;
    let prev = null;
    for (let i = 0; i < this.getSize(); i++) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  print() {
    if (this.isEmpty()) {
      console.log("this linked list is empty");
      return;
    }
    let values = [];
    let current = this.head;
    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values);
  }
}

const linkedList = new LinkedList();

linkedList.prepend(10);
linkedList.prepend(20);
linkedList.prepend(30);

linkedList.append(40);

linkedList.insert(50, 1);

linkedList.removeByIndex(0);
linkedList.removeByIndex(2);

linkedList.removeByValue(40);
linkedList.removeByValue(10);
linkedList.removeByValue(20);

console.log(linkedList.searchByValue(40));

console.log(
  `this linked list  has ${linkedList.getSize()} ${
    linkedList.getSize() === 1 ? "node" : "nodes"
  }`
);

console.log(`Head has the value of ${linkedList.head?.value} now`);

linkedList.reverse();

linkedList.print();
