class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
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
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
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
        console.log(`index => ${i}`);
        node = node.next;
      }
      console.log(node.value);
      node.next = node.next.next;
      if (index === this.getSize() - 1) this.tail = node.next;
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
        if (i === this.getSize() - 1) this.tail = prev;
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
    this.tail = this.head;
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

class QueueLinkedList {
  constructor() {
    this.list = new LinkedList();
  }

  front() {
    return this.list.head ? this.list.head.value : null;
  }

  rear() {
    return this.list.tail ? this.list.tail.value : null;
  }

  size() {
    return this.list.getSize();
  }

  print() {
    this.list.print();
  }

  enqueue(value) {
    this.list.append(value);
  }
  dequeue() {
    this.list.removeByIndex(0);
  }

  isEmpty() {
    return this.list.isEmpty();
  }
}

const queue = new QueueLinkedList();

console.log(`stack length : ${queue.size()}`);
console.log(`stack front : ${queue.front()}`);
console.log(`stack rear : ${queue.rear()}`);

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log(`stack length : ${queue.size()}`);
console.log(`stack front : ${queue.front()}`);
console.log(`stack rear : ${queue.rear()}`);
queue.print();

queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(`stack length : ${queue.size()}`);
console.log(`stack front : ${queue.front()}`);
console.log(`stack rear : ${queue.rear()}`);
queue.print();
