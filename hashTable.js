function HashTable(size) {
  this.buckets = Array(size)
  this.numBuckets = this.buckets.length
}

function HashNode(key, value, next) {
  this.key = key
  this.value = value
  this.next = next || null
}

HashTable.prototype.hash = function(key) {
  let total = 0
  for (let i = 0; i < key.length; i++) {
    total += key.charCodeAt(i)
  }
  let bucket = total % this.numBuckets
  return bucket
}

HashTable.prototype.insert = function(key, value) {
  let index = this.hash(key)
  if (!this.buckets[index]) {
    this.buckets[index] = new HashNode(key,value)
  }
  else if (this.buckets[index].key === key) {
    this.buckets[index].value = value
  }
  else {
    let currentNode = this.buckets[index]
    while (currentNode.next) {
      if (currentNode.next.key === key) {
        currentNode.next.value = value
        return
      }
      currentNode = currentNode.next
    }
    currentNode.next = new HashNode(key, value)
  }
}

var myHT = new HashTable(30)
myHT.insert('tomo', 'tomo@gmail.com')
myHT.insert('gam', 'gam@gmail.com')
myHT.insert('tomo', 'tomo@yahoo.com')
myHT.insert('tomo', 'tomohoge@yahoo.com')
console.log(myHT)
