var assert = require('./assert')

var Person = require('./Person')

console.log('TEST Person')

console.log('CASE constructor')

var person = new Person('Peter', 'Pan', new Date(2000, 0, 31, 16, 45), 'GB', 140, 50)

assert.equalsValue(person.name, 'Peter')
assert.equalsValue(person.surname, 'Pan')
//assert.equalsValue(person.birthdate instanceof Date, true)
assert.instanceOf(person.birthdate, Date)
assert.equalsValue(person.birthdate.getFullYear(), 2000)
assert.equalsValue(person.birthdate.getMonth(), 0)
assert.equalsValue(person.birthdate.getDate(), 31)
assert.equalsValue(person.birthdate.getHours(), 16)
assert.equalsValue(person.birthdate.getMinutes(), 45)
assert.equalsValue(person.country, 'GB')
assert.equalsValue(person.height, 140)
assert.equalsValue(person.weight, 50)

console.log('CASE sleep')

var person = new Person('Peter', 'Pan', new Date(2000, 0, 1, 16, 45), 'GB', 140, 50)

person.sleep()

assert.equalsValue(person.sleeping, true)

console.log('CASE awake')

var person = new Person('Peter', 'Pan', new Date(2000, 0, 1, 16, 45), 'GB', 140, 50)

person.sleeping = true

person.awake()

assert.equalsValue(person.sleeping, false)

console.log('CASE eat')

var person = new Person('Peter', 'Pan', new Date(2000, 0, 1, 16, 45), 'GB', 140, 50)

person.eat('🍌')

assert.equalsValue(person.eating, '🍌')

console.log('CASE eat on sleeping (unhappy)')

var person = new Person('Peter', 'Pan', new Date(2000, 0, 1, 16, 45), 'GB', 140, 50)

person.sleeping = true

var errorThrown

try {
    person.eat('🍌')
} catch (error) {
    errorThrown = error
}

assert.error(errorThrown, 'Error', 'try to eat on sleeping')


console.log('CASE walk')

var person = new Person('Peter', 'Pan', new Date(2000, 0, 1, 16, 45), 'GB', 140, 50)

person.walk()

assert.equalsValue(person.walking, 4)

console.log('CASE walk at speed 5')

var person = new Person('Peter', 'Pan', new Date(2000, 0, 1, 16, 45), 'GB', 140, 50)

person.walk(5)

assert.equalsValue(person.walking, 5)

console.log('CASE walk at speed 2')

var person = new Person('Peter', 'Pan', new Date(2000, 0, 1, 16, 45), 'GB', 140, 50)

person.walk(2)

assert.equalsValue(person.walking, 2)

console.log('CASE walk at speed 4')

var person = new Person('Peter', 'Pan', new Date(2000, 0, 1, 16, 45), 'GB', 140, 50)

person.walk(4)

assert.equalsValue(person.walking, 4)

console.log('CASE walk at speed 1')

var person = new Person('Peter', 'Pan', new Date(2000, 0, 1, 16, 45), 'GB', 140, 50)

person.walk(1)

assert.equalsValue(person.walking, 1)

console.log('CASE talk')

var person = new Person('Peter', 'Pan', new Date(2000, 0, 1, 16, 45), 'GB', 140, 50)

person.talk()

assert.equalsValue(person.talking, true)

console.log('CASE walk & talk')

var person = new Person('Peter', 'Pan', new Date(2000, 0, 1, 16, 45), 'GB', 140, 50)

person.walk()
person.talk()

assert.equalsValue(person.talking, true)
assert.equalsValue(person.walking, 4)
