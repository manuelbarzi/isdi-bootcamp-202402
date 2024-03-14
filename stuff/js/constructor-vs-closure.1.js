function ColdWallet() {
    this._password = ''
    this._bitcoins = 0
}

ColdWallet.prototype.changePassword = function (currentPassword, newPassword) {
    if (typeof currentPassword !== 'string') throw new TypeError('currrentPassword is not a string')
    if (typeof newPassword !== 'string') throw new TypeError('newPassword is not a string')

    if (currentPassword !== this._password) throw new Error('wrong password')

    this._password = newPassword
}

ColdWallet.prototype.getBitcoins = function (password) {
    if (typeof password !== 'string') throw new TypeError('password is not a string')

    if (password !== this._password) throw new Error('wrong password')

    return this._bitcoins
}

ColdWallet.prototype.addBitcoins = function (bitcoins) {
    if (typeof bitcoins !== 'number') throw new TypeError('bitcoins is not a number')
    if (bitcoins < 0) throw new Error('bitcoins is a negative number')

    this._bitcoins += bitcoins
}


var w = new ColdWallet
w.changePassword('', '123123123')
var w2 = new ColdWallet
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
// 0
// 0