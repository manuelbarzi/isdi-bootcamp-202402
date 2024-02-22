/**
 * Inserts elements in iterable object at specfified index.
 *
 * @param object - The iterable object to mutate. 
 * @param index - The index from which to insert the given values.
 * @param value - The value to insert.
 * 
 * @throws {TypeError} When object is not an object, or when index is not a number.
 */
function insertMany(object, index, value) {
    if (!(object instanceof Object)) throw new TypeError(object + ' is not an Object')
    if (typeof index !== 'number') throw new TypeError(index + ' is not a Number')

    var numOfValues = arguments.length - 2

    // object -> #1 { 0: 'red', 1: 'blue', 2: 'green', length: 3 }
    // index -> 1
    // arguments -> { 0: #1, 1: 1, 2: 'skyblue', length: 3 }

    // object[3] = object[2] // #1 { 0: 'red', 1: 'blue', 2: 'green', 3: 'green', length: 3 }
    // object[2] = object[1] // #1 { 0: 'red', 1: 'blue', 2: 'blue', 3: 'green', length: 3 }

    var numOfDisplacements = object.length - index

    for (var n = 0; n < numOfDisplacements; n++)
        object[object.length - n] = object[object.length - n - 1]

    for (var n = 0; n < numOfValues; n++)
        object[index + n] = arguments[2 + n]

    object.length += numOfValues

    return object.length
}

console.log('CASE 1: insert skyblue in index 1')

var colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}

var length = insertMany(colors, 1, 'skyblue')

console.log(length)
// 4

console.log(colors)
/*
{
    0: 'red',
    1: 'skyblue',
    2: 'blue',
    3: 'green',
    length: 4
}
*/

console.log('CASE 2: insert skyblue, gold and plum in index 2')

var colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}

var length = insertMany(colors, 2, 'skyblue', 'gold', 'plum')

console.log(length)
// 6

console.log(colors)
/*
{
    0: 'red',
    1: 'blue',
    2: 'skyblue',
    3: 'gold',
    4: 'plum',
    5: 'green',
    length: 6
}
*/

console.log('CASE 3: fails on undefind object parameter')

try {
    insertMany()
} catch (error) {
    console.log(error)
    // TypeError: undefined is not an Object
}

console.log('CASE 4: fails on 1 as an object parameter')

try {
    insertMany(1)
} catch (error) {
    console.log(error)
    // TypeError: 1 is not an Object
}

console.log('CASE 5: fails on undefined as index parameter')

var colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}

try {
    insertMany(colors)
} catch (error) {
    console.log(error)
    // TypeError: undefined is not a Number
}