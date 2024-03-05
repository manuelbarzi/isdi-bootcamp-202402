const Pet = require('./Pet')

class Dog extends Pet {
    constructor(owner, name, birthdate, country, weight) {
        super(owner, name, birthdate, country, weight)

        this.barking = false
    }

    bark() {
        this.barking = true
    }

    tsssh() {
        this.barking = false
    }
}

module.exports = Dog
