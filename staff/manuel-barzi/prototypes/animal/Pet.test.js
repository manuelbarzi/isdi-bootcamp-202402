var assert = require('./assert')

var Animal = require('./Animal')
var Pet = require('./Pet')

console.log('TEST Pet')

console.log('CASE constructor')

var pet = new Pet('Sultan', new Date(2000, 0, 31, 16, 45), 'GB', 50)

assert.equalsValue(pet.name, 'Sultan')
assert.instanceOf(pet.birthdate, Date)
assert.equalsValue(pet.birthdate.getFullYear(), 2000)
assert.equalsValue(pet.birthdate.getMonth(), 0)
assert.equalsValue(pet.birthdate.getDate(), 31)
assert.equalsValue(pet.birthdate.getHours(), 16)
assert.equalsValue(pet.birthdate.getMinutes(), 45)
assert.equalsValue(pet.country, 'GB')
assert.equalsValue(pet.weight, 50)
assert.equalsValue(pet.sleeping, false)
assert.equalsValue(pet.eating, '')
assert.equalsValue(pet.legsSpeed, 0)

assert.instanceOf(pet, Pet)
assert.instanceOf(pet, Animal)

console.log('CASE toString')

var pet = new Pet('Sultan', new Date(2000, 0, 31, 16, 45), 'GB', 50)

assert.equalsValue(pet.toString(), 'Pet (Sultan, 2000-01-31, GB)')
