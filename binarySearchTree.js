class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
      console.log(node.value, " => node inserted on in the root node");

      return;
    }
    this.insertNode(node, this.root);
  }
  insertNode(node, root) {
    if (node.value > root.value) {
      if (root.right === null) {
        root.right = node;
        console.log(node.value, " => node inserted on in the right side");
      } else {
        this.insertNode(node, root.right);
      }
    }
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node;
        console.log(node.value, " => node inserted on in the left side");
      } else {
        this.insertNode(node, root.left);
      }
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(100);
bst.insert(200), bst.insert(50);
