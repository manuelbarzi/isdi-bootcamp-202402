delete String.prototype.startsWith

function startsWith(string, searchString) {
    // TODO implement me
}

// CASE 1

var s = 'hola mundo'

var result = startsWith(s, 'hol')

console.log(result)
// true

// CASE 2

var s = 'hola mundo'

var result = startsWith(s, 'holo')

console.log(result)
// false