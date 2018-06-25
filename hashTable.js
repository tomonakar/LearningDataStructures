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
  const index = this.hash(key)
  if (!this.buckets[index]) this.buckets[index] = new HashNode(key,value)
  else {
    let currentNode = this.buckets[index]
    while (currentNode.next) {
      currentNode = currentNode.next = new HashNode(key, value)
    }
  }
}
let myHT = new HashTable(30)
myHT.insert('tomo', 'tomo@gmail.com')
myHT.insert('gam', 'gam@gmail.com')
myHT.insert('tomo', 'tomo@gyahoo.com')
console.log(myHT)
