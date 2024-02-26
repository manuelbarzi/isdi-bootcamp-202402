function Car(brand, model) {
    this.brand = brand
    this.model = model
    this.status = 'off'
    this.deposit = 0
}

Car.prototype.fuel = function (load) {
    this.deposit = load
}

Car.prototype.start = function () {
    this.status = 'on'
}

Car.prototype.stop = function () {
    this.status = 'off'
}

var c1 = new Car('Ferrari', 'Testarossa')
var c2 = new Car('Seat', 'Ibiza')
var c3 = new Car('Lamborghini', 'Diablo')

var wagon = [c1, c2, c3] // new Array(c1, c2, c3)

c1.fuel(50)
console.log(c1.deposit)
// 50

c1.start()
console.log(c1.status)
// 'on'

c1.stop()
console.log(c1.status)
// 'off'
// VM1075:27 50
// VM1075:31 on
// VM1075:35 off
// undefined
c1
// Car {brand: 'Ferrari', model: 'Testarossa', status: 'off', deposit: 50}brand: "Ferrari"deposit: 50model: "Testarossa"status: "off"[[Prototype]]: Objectfuel: ƒ (load)arguments: nullcaller: nulllength: 1name: ""prototype: {}[[FunctionLocation]]: VM1075:8[[Prototype]]: ƒ ()[[Scopes]]: Scopes[1]start: ƒ ()stop: ƒ ()constructor: ƒ Car(brand, model)[[Prototype]]: Object
c2.fuel(75)
// undefined
c2
// Car {brand: 'Seat', model: 'Ibiza', status: 'off', deposit: 75}
c3.fuel(25)
// undefined
c3
// Car {brand: 'Lamborghini', model: 'Diablo', status: 'off', deposit: 25}