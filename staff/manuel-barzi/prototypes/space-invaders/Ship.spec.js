var assert = require('./assert')

var Actor = require('./Actor')
var Ship = require('./Ship')

console.log('Ship')

console.log('* constructor')

var ship = new Ship(50, 70)

assert.instanceOf(ship, Ship)
assert.instanceOf(ship, Actor)
assert.equalsValue(ship.constructor, Ship)

assert.equalsValue(ship.x, 0)
assert.equalsValue(ship.y, 0)
assert.equalsValue(ship.z, 0)

assert.equalsValue(ship.step, 10)

assert.equalsValue(ship.width, 50)
assert.equalsValue(ship.height, 70)

assert.equalsValue(ship.lifes, 3)

console.log('* moveLeft')

var ship = new Ship(50, 70)

ship.moveLeft()

assert.equalsValue(ship.x, -ship.step)

console.log('* moveRight')

var ship = new Ship(50, 70)

ship.moveRight()

assert.equalsValue(ship.x, ship.step)

console.log('* moveDown')

var ship = new Ship(50, 70)

ship.moveLeft()

assert.equalsValue(ship.y, -ship.step)

console.log('* moveUp')

var ship = new Ship(50, 70)

ship.moveRight()

assert.equalsValue(ship.y, ship.step)
