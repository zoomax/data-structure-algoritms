class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  isEmpty() {
    return this.root === null
  }

  insert(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.root = node
      console.log(node.value, ' => node inserted on in the root node')

      return
    }
    this.insertNode(node, this.root)
  }
  insertNode(node, root) {
    if (node.value > root.value) {
      if (root.right === null) {
        root.right = node
        console.log(node.value, ' => node inserted on in the right side')
      } else {
        this.insertNode(node, root.right)
      }
    }
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node
        console.log(node.value, ' => node inserted on in the left side')
      } else {
        this.insertNode(node, root.left)
      }
    }
  }
  search(value) {
    return this.searchNode(value, this.root)
  }
  searchNode(value, root) {
    if (!root) {
      return false
    }
    if (root.value === value) {
      return true
    }
    if (value > root.value) {
      return this.searchNode(value, root.right)
    }
    if (value < root.value) {
      return this.searchNode(value, root.left)
    }
  }

  preOrder(node) {
    if (node) {
      console.log(node.value)
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
  }
}

const bst = new BinarySearchTree()
bst.insert(100)
bst.insert(200)
bst.insert(50)
bst.insert(10)
bst.insert(20)

console.log(bst.search(100))
console.log(bst.search(200))
console.log(bst.search(4))
bst.preOrder(bst.root)
