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
    if (!this.isEmpty()) {
      node.next = this.head
    }
    this.head = node
    this.size++
  }
  print() {
    if (this.isEmpty()) {
      console.log('this linked list is empty')
      return
    }
    let values = []
    let current = this.head
    while (current !== null) {
      values.push(current.value)
      current = current.next
    }
    console.log(values)
  }

}

const linkedList = new LinkedList()
linkedList.prepend(10)
linkedList.prepend(20)
linkedList.prepend(30)
linkedList.append(40)
console.log(
  `this linked list  has ${linkedList.getSize()} ${
    linkedList.getSize() === 1 ? 'node' : 'nodes'
  }`,
)
console.log(`Head has the value of ${linkedList.head?.value} now`)
linkedList.print()
