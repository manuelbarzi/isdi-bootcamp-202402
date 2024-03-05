class Animal {
    constructor(name, birthdate, country, weight) {
        if (typeof name !== 'string') throw new TypeError('name is not a string')
        if (!(birthdate instanceof Date)) throw new TypeError('birthdate is not a Date')
        if (typeof country !== 'string') throw new TypeError('country is not a string')
        if (typeof weight !== 'number') throw new TypeError('weight is not a number')

        this.name = name
        this.birthdate = birthdate
        this.country = country
        this.weight = weight
        this.sleeping = false
        this.eating = ''
        this.legsSpeed = Animal.NOT_WALK
    }

    static NOT_WALK = 0
    static WALK_VERY_SLOW = 1
    static WALK_SLOW = 2
    static WALK_NORMAL = 4
    static WALK_FAST = 5
    static RUN = 6

    sleep() {
        this.sleeping = true
    }

    awake() {
        this.sleeping = false
    }

    eat(food) {
        if (this.sleeping) throw new Error('try to eat on sleeping')

        this.eating = food
    }

    moveLegs(speed) {
        this.legsSpeed = speed === undefined ? 4 : speed
    }

    toString() {
        return Animal.name + ' (' + this.name + ')'
    }
}

module.exports = Animal