delete String.prototype.lastIndexOf

function lastIndexOf(string, searchString) {
    // TODO implement me
}

// CASE 1

var s = 'hola mundo'

var index = lastIndexOf(s, 'o')

console.log(index)
// 9

// CASE 2

var s = 'hola mundo'

var index = lastIndexOf(s, 'ol')

console.log(index)
// 1