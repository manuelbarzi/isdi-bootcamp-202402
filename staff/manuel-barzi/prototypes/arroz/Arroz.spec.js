var matcha = require('./matcha')

var Arroz = require('./Arroz')

matcha.describe('Arroz', function () {
    matcha.it('should construct', function () {
        var a = new Arroz

        matcha.expect(a instanceof Arroz).toBe(true)
    })
})