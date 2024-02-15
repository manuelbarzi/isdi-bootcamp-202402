delete String.prototype.slice

function slice(string, indexStart, indexEnd) {
    // TODO implement me
}

// CASE 1

var s = 'hola mundo'

var piece = slice(s, 5, 8)

console.log(piece)
// 'mun'

// CASE 2

var s = 'hola mundo'

var piece = slice(s, -3)

console.log(piece)
// 'ndo'

