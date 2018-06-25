function HashTable(size) {
  this.buckets = Array(size)
  this.numBuckets = this.buckets.length
}

const myHT = new HashTable(30)
console.log(myHT)

function HashNode(key, value, next) {
  this.key = key
  this.value = value
  this.next = next || null
}
