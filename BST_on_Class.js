class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
  insert(value) {
    if (value <= this.value) {
      if (!this.left) this.left = new BST(value)
      else this.left.insert(value)
    }
    else if (value > this.value) {
      if (!this.right) this.right = new BST(value)
      else this.right.insert(value)
    }
  }
  contains(value) {
    if (value === this.value) return true
    else if (value < this.value) {
      if (!this.left) return false
      else return this.left.contains(value)
    }
    else if (value > this.value) {
      if (!this.right) return false
      else return this.right.contains(value)
    }
  }
}

let bst = new BST(50)
bst.insert(50)
bst.insert(30)
bst.insert(20)
bst.insert(150)
bst.insert(250)
bst.insert(5)
bst.insert(55)
bst.insert(10)
bst.insert(500)

console.log(bst.contains(110))
