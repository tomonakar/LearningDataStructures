class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  addToHead(value) {
    const newItem = new Item(value, this.head, null)

    if (this.head) this.head.prev = newItem
    else this.tail = newItem

    this.head = newItem
  }

  addToTail(value) {
    const newItem = new Item(value, null, this.tail)

    if (this.tail) this.tail.next = newItem
    else this.head = newItem

    this.tail = newItem
  }

  removeHead() {
    if (!this.head) return null

    const value = this.head.value
    this.head = this.head.next

    if (this.head) this.head.prev = null
    else this.tail = null

    return value
  }

  removeTail() {
    if (!this.tail) return null

    const value = this.tail.value
    this.tail = this.tail.next

    if (this.tail) this.tail.prev = null
    else this.tail = null

    return value
  }

  search(value) {
    let currentValue = this.head

    while (currentValue) {
      if (currentValue.value === value) return currentValue
      currentValue = currentValue.next
    }
    return null
  }

  indexOf(value) {
    const indexes = []

    let currentIndex = 0
    let currentValue = this.head

    while (currentValue) {
      if (currentValue.value === value) indexes.push(currentIndex)
      currentValue = currentValue.next
      currentIndex++
    }
    return indexes
  }

  reversed() {
    let LinkedListReversed = new LinkedList()
    let currentNode = this.head

    while (currentNode) {
      LinkedListReversed.addToHead(currentNode.value)
      currentNode = currentNode.next
    }

    return LinkedListReversed
  }
}

class Item {
  constructor(value, next, prev) {
    this.value = value
    this.next = next
    this.prev = prev
  }
}

let linkedList = new LinkedList()

linkedList.addToHead('Jhon')
linkedList.addToHead('Nan')
linkedList.addToTail('Rom')
linkedList.addToTail('Ben')
linkedList.addToTail('Chan')

console.log(linkedList)
