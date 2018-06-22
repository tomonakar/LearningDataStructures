function LinkedList() {
  this.head = null
  this.tail = null
}

function Node(value, next, prev) {
  this.value = value
  this.next = next
  this.prev = prev
}

LinkedList.prototype.addToHead = function(value) {
  const newNode = new Node(value, this.head, null)
  if (this.head) this.head.prev = newNode
  else this.tail = newNode
  this.head = newNode
}

LinkedList.prototype.addToTail = function(value) {
  const newNode = new Node(value, null, this.tail)
  if(this.tail) this.tail.next = newNode
  else this.head = newNode
  this.tail = newNode
}

LinkedList.prototype.removeHead = function() {
  if (!this.head) return null
  const val = this.head.value
  this.head = this.head.next
  if (this.head) this.head.prev = null
  else this.tail = null
  return val
}

LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null
  const val = this.tail.value
  this.taile = this.tail.prev
  if (this.tail) this.tail.prev = null
  else this.tail = null
  return val
}

LinkedList.prototype.search = function(searchValue) {
  let currentNode = this.head
  while(currentNode) {
    if (currentNode.value === searchValue) return currentNode.value
    currentNode = currentNode.next
  }
  return null

}

const ll = new LinkedList()
ll.addToHead(123)
ll.addToHead(70)
ll.addToHead('hello')
ll.addToTail(19)
ll.addToTail('world')
ll.addToTail(20)

console.log(ll.search('hello'))
