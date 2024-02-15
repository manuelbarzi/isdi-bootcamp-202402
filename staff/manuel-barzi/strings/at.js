delete String.prototype.at

function at(string, index) {
    // TODO implement me
}

// CASE 1

var s = 'hola mundo'

var char = at(s, 6)

console.log(char)
// 'u'

// CASE 2

var s = 'hola mundo'

var char = at(s, 20)

console.log(char)
// undefined

// CASE 3

var s = 'hola mundo'

var char = at(s, -4)

console.log(char)
// 'u'