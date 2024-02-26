function Car(brand, model) {
    this.brand = brand
    this.model = model
    this.status = 'off'
    this.deposit = 0

    this.fuel = function (load) {
        this.deposit = load
    }

    this.start = function () {
        this.status = 'on'
    }

    this.stop = function () {
        this.status = 'off'
    }
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
// VM987: 27 50
// VM987: 31 on
// VM987: 35 off