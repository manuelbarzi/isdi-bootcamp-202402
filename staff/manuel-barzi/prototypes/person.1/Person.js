function Person(name, surname, birthdate, country, height, weight) {
    this.name = name
    this.surname = surname
    this.birthdate = birthdate
    this.country = country
    this.height = height
    this.weight = weight
}

Person.prototype.sleep = function () {
    this.status = 'sleeping'
}

Person.prototype.awake = function () {
    this.status = 'awake'
}

Person.prototype.eat = function () {
    if (this.status === 'sleeping') throw new Error('try to eat on sleeping')

    this.status = 'awake-eating'
}

Person.prototype.walk = function (speed) {
    if (speed) {
        this.speed = speed

        if (speed > 4)
            this.status = 'awake-walking-fastly'
        else if (speed < 2)
            this.status = 'awake-walking-very-slowly'
        else if (speed < 4)
            this.status = 'awake-walking-slowly'
        else
            this.status = 'awake-walking'
    } else
        this.status = 'awake-walking'
}

Person.prototype.talk = function () {
    if (this.status === 'awake-walking')
        this.status = this.status + '-talking'
    else
        this.status = 'awake-talking'
}

module.exports = Person