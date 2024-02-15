delete String.prototype.endsWith

function endsWith(string, searchString) {
    // TODO implement me
}

// CASE 1

var s = 'hola mundo'

var result = endsWith(s, 'ndo')

console.log(result)
// true

// CASE 2

var s = 'hola mundo'

var result = endsWith(s, 'dos')

console.log(result)
// false