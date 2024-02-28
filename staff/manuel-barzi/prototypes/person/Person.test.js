var assert = require('./assert')

var Person = require('./Person')

console.log('TEST Person')

console.log('CASE constructor')

var person = new Person('Peter', 'Pan', new Date(2000, 0, 1, 16, 45), 'GB', 140, 50)

assert.equalsValue(person.name, 'Peter')
assert.equalsValue(person.surname, 'Pan')
//assert.equalsValue(person.birthdate, ?)
assert.equalsValue(person.country, 'GB')
assert.equalsValue(person.height, 140)
assert.equalsValue(person.weight, 50)
