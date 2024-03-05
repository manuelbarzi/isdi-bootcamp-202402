var Animal = require('./Animal')

class Person extends Animal {
    constructor(name, surname, birthdate, country, height, weight) {
        super(name, birthdate, country, weight)

        this.surname = surname
        this.height = height
        this.talking = false
    }

    static NOT_WALK = 0
    static WALK_VERY_SLOW = 1
    static WALK_SLOW = 2
    static WALK_NORMAL = 4
    static WALK_FAST = 5
    static RUN = 6

    talk() {
        this.talking = true
    }
}

module.exports = Person