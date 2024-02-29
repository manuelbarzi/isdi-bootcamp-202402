var Animal = require('./Animal')

function Pet(owner, name, birthdate, country, weight) {
    if (!(owner instanceof Person)) throw new TypeError('owner is not a Person')
    if (typeof name !== 'string') throw new TypeError('name is not a String')
    if (!(birthdate instanceof Date)) throw new TypeError('birthdate is not a Date')
    if (typeof country !== 'string') throw new TypeError('country is not a String')
    if (typeof weight !== 'number') throw new TypeError('weight is not a number')

    this.owner = owner
    this.name = name
    this.birthdate = birthdate
    this.country = country
    this.weight = weight
    this.sleeping = false
    this.eating = ''
    this.legsSpeed = Pet.NOT_WALK
}

//Pet.prototype = new Animal
Pet.prototype = Object.create(Animal.prototype)

Pet.prototype.toString = function () {
    return Pet.name + ' (' + this.name + ', ' + this.birthdate.toLocaleDateString('en-CA') + ', ' + this.country + ')'
}

Pet.NOT_WALK = 0
Pet.WALK_VERY_SLOW = 1
Pet.WALK_SLOW = 2
Pet.WALK_NORMAL = 4
Pet.WALK_FAST = 5
Pet.RUN = 6

module.exports = Pet