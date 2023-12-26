class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  isEmpty() {
    return this.size === 0
  }
  getSize() {
    return this.size
  }

  prepend(value) {
    const node = new Node(value)
    this.head = node
    if (!this.isEmpty()) {
      node.next = this.head
    }
    this.size++
  }
}

const linkedList = new LinkedList()
linkedList.prepend(10)
linkedList.prepend(20)
linkedList.prepend(30)
console.log(
  `this linked list  has ${linkedList.getSize()} ${
    linkedList.getSize() === 1 ? 'node' : 'nodes'
  }`,
)
console.log(`Head has the value of ${linkedList.head?.value} now`)
