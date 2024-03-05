var Animal = require('./Animal')
var Person = require('./Person')

class Pet extends Animal {
    constructor(owner, name, birthdate, country, weight) {
        super(name, birthdate, country, weight)

        if (!(owner instanceof Person)) throw new TypeError('owner is not a Person')
        this.owner = owner
    }

    toString() {
        return Pet.name + ' (' + this.name + ', ' + this.birthdate.toLocaleDateString('en-CA') + ', ' + this.country + ')'
    }

    static NOT_WALK = 0
    static WALK_VERY_SLOW = 1
    static WALK_SLOW = 2
    static WALK_NORMAL = 4
    static WALK_FAST = 5
    static RUN = 6
}

module.exports = Pet