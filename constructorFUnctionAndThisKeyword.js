function User(firstName, lastName, age, gender) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.age = age,
  this.gender = gender
}

const user1 = new User('tomo', 'nakar', 35, 'male')
const user2 = new User('hoge', 'fuga', 21, 'female')
console.log(user1)
console.log(user2)

// prototypeにemailDomainを追加
User.prototype.emailDomain = '@faicebook.com'

// prototypeにアクセス
console.log(user1.__proto__)
console.log(user2.__proto__)
console.log(user2.emailDomain)
