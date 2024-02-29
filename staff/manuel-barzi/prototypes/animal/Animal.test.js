var assert = require('./assert')

var Animal = require('./Animal')

console.log('TEST Animal')

console.log('CASE constructor')

var animal = new Animal('Sultan', new Date(2000, 0, 31, 16, 45), 'GB', 50)

assert.equalsValue(animal.name, 'Sultan')
assert.instanceOf(animal.birthdate, Date)
assert.equalsValue(animal.birthdate.getFullYear(), 2000)
assert.equalsValue(animal.birthdate.getMonth(), 0)
assert.equalsValue(animal.birthdate.getDate(), 31)
assert.equalsValue(animal.birthdate.getHours(), 16)
assert.equalsValue(animal.birthdate.getMinutes(), 45)
assert.equalsValue(animal.country, 'GB')
assert.equalsValue(animal.weight, 50)
assert.equalsValue(animal.sleeping, false)
assert.equalsValue(animal.eating, '')
assert.equalsValue(animal.legsSpeed, 0)

console.log('CASE sleep')

var animal = new Animal('Sultan', new Date(2000, 0, 1, 16, 45), 'GB', 50)

animal.sleep()

assert.equalsValue(animal.sleeping, true)

console.log('CASE awake')

var animal = new Animal('Sultan', new Date(2000, 0, 1, 16, 45), 'GB', 50)

animal.sleeping = true

animal.awake()

assert.equalsValue(animal.sleeping, false)

console.log('CASE eat')

var animal = new Animal('Sultan', new Date(2000, 0, 1, 16, 45), 'GB', 50)

animal.eat('🍌')

assert.equalsValue(animal.eating, '🍌')

console.log('CASE eat on sleeping (unhappy)')

var animal = new Animal('Sultan', new Date(2000, 0, 1, 16, 45), 'GB', 50)

animal.sleeping = true

var errorThrown

try {
    animal.eat('🍌')
} catch (error) {
    errorThrown = error
}

assert.error(errorThrown, 'Error', 'try to eat on sleeping')


console.log('CASE not walk')

var animal = new Animal('Sultan', new Date(2000, 0, 1, 16, 45), 'GB', 50)

animal.moveLegs(Animal.NOT_WALK)

assert.equalsValue(animal.legsSpeed, Animal.NOT_WALK)

console.log('CASE walk')

var animal = new Animal('Sultan', new Date(2000, 0, 1, 16, 45), 'GB', 50)

animal.moveLegs()

assert.equalsValue(animal.legsSpeed, Animal.WALK_NORMAL)

console.log('CASE walk fast')

var animal = new Animal('Sultan', new Date(2000, 0, 1, 16, 45), 'GB', 50)

animal.moveLegs(Animal.WALK_FAST)

assert.equalsValue(animal.legsSpeed, Animal.WALK_FAST)

console.log('CASE walk slow')

var animal = new Animal('Sultan', new Date(2000, 0, 1, 16, 45), 'GB', 50)

animal.moveLegs(Animal.WALK_SLOW)

assert.equalsValue(animal.legsSpeed, Animal.WALK_SLOW)

console.log('CASE walk normal')

var animal = new Animal('Sultan', new Date(2000, 0, 1, 16, 45), 'GB', 50)

animal.moveLegs(Animal.WALK_NORMAL)

assert.equalsValue(animal.legsSpeed, Animal.WALK_NORMAL)

console.log('CASE walk very slow')

var animal = new Animal('Sultan', new Date(2000, 0, 1, 16, 45), 'GB', 50)

animal.moveLegs(Animal.WALK_VERY_SLOW)

assert.equalsValue(animal.legsSpeed, Animal.WALK_VERY_SLOW)

console.log('CASE run')

var animal = new Animal('Sultan', new Date(2000, 0, 1, 16, 45), 'GB', 50)

animal.moveLegs(Animal.RUN)

assert.equalsValue(animal.legsSpeed, Animal.RUN)

console.log('CASE toString')

var animal = new Animal('Sultan', new Date(2000, 0, 1, 16, 45), 'GB', 50)

assert.equalsValue(animal.toString(), 'Animal (Sultan)')

console.log('CASE constructor fails on non-string name')

var errorThrown

try {
    new Animal(undefined, new Date(2000, 0, 1, 16, 45), 'GB', 50)
} catch (error) {
    errorThrown = error
}

assert.error(errorThrown, 'TypeError', 'name is not a string')

console.log('CASE constructor fails on non-Date birthdate')

var errorThrown

try {
    new Animal('Sultan', undefined, 'GB', 50)
} catch (error) {
    errorThrown = error
}

assert.error(errorThrown, 'TypeError', 'birthdate is not a Date')

console.log('CASE constructor fails on non-string country')

var errorThrown

try {
    new Animal('Sultan', new Date(2000, 0, 1, 16, 45), undefined, 50)
} catch (error) {
    errorThrown = error
}

assert.error(errorThrown, 'TypeError', 'country is not a string')

console.log('CASE constructor fails on non-number weight')

var errorThrown

try {
    new Animal('Sultan', new Date(2000, 0, 1, 16, 45), 'GB', undefined)
} catch (error) {
    errorThrown = error
}

assert.error(errorThrown, 'TypeError', 'weight is not a number')