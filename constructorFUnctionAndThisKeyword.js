function User(firstName, lastName, age, gender) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.age = age,
  this.gender = gender
}

const user1 = new User('tomo', 'nakar', 35, 'male')
console.log(user1)
