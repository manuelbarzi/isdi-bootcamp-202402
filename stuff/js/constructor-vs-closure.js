function newColdWallet() {
    var _password = ''
    var _bitcoins = 0

    function ColdWallet() {
    }

    ColdWallet.prototype.changePassword = function (currentPassword, newPassword) {
        if (typeof currentPassword !== 'string') throw new TypeError('currrentPassword is not a string')
        if (typeof newPassword !== 'string') throw new TypeError('newPassword is not a string')

        if (currentPassword !== _password) throw new Error('wrong password')

        _password = newPassword
    }

    ColdWallet.prototype.getBitcoins = function (password) {
        if (typeof password !== 'string') throw new TypeError('password is not a string')

        if (password !== _password) throw new Error('wrong password')

        return _bitcoins
    }

    ColdWallet.prototype.addBitcoins = function (bitcoins) {
        if (typeof bitcoins !== 'number') throw new TypeError('bitcoins is not a number')
        if (bitcoins < 0) throw new Error('bitcoins is a negative number')

        _bitcoins += bitcoins
    }

    return new ColdWallet
}


var w = newColdWallet()
w.changePassword('', '123123123')
var w2 = newColdWallet()
w2.changePassword('', '234234234')

w.addBitcoins(6)
w2.addBitcoins(4)

console.log(w.getBitcoins('123123123'))
console.log(w2.getBitcoins('234234234'))

// HACKER

var hackedBitcoins = w._bitcoins
w._bitcoins = 0
var hackedBitcoins2 = w2._bitcoins
w2._bitcoins = 0

// OWNER

console.log(w.getBitcoins('123123123'))
console.log(w2.getBitcoins('234234234'))

// 6
// 4
// 6
// 4