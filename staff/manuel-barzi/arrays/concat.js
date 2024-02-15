delete Array.prototype.concat

function concat() {
    var newArray = []

    for (var i = 0; i < arguments.length; i++) {
        var argument = arguments[i]

        if (argument instanceof Array)
            for (var j = 0; j < argument.length; j++) {
                var element = argument[j]

                newArray[newArray.length] = element
            }
        else newArray[newArray.length] = argument
    }

    return newArray
}

console.log('CASE 1')

var nums = [100, 200, 300, 400, 500]
var animals = ['pigs', 'goats', 'sheep', 'cows']

var result = concat(nums, animals)

console.log(result.length)
// 9
console.log(result)
// [100, 200, 300, 400, 500, 'pigs', 'goats', 'sheep', 'cows']

console.log('CASE 2')

var nums = []
var animals = []

var result = concat(nums, animals)

console.log(result.length)
// 0
console.log(result)
// []

console.log('CASE 3')

var nums = [100, 200, 300, 400, 500]
var animals = ['pigs', 'goats', 'sheep', 'cows']
var fruits = ['apples', 'bananas', 'oranges', 'lemons']
var cars = ['lambo', 'ferra', 'merce', 'porsc']

var result = concat(nums, animals, fruits, cars)

console.log(result)
// ['pigs', 'goats', 'sheep', 'cows', 'apples', 'bananas', 'oranges', 'lemons', 'lambo', 'ferra', 'merce', 'porsc']

console.log('CASE 4')

var nums = [100, 200, 300, 400, 500]
var animals = ['pigs', 'goats', 'sheep', 'cows']
var fruits = ['apples', 'bananas', 'oranges', 'lemons']
var cars = ['lambo', 'ferra', 'merce', 'porsc']

var result = concat(nums, animals, fruits, cars, true, 'hola mundo', undefined, { name: 'Pepito' }, function fun() { }, 123, -10)

console.log(result.length)
// 24
console.log(result)
// [100, 200, 300, 400, 500, 'pigs', 'goats', 'sheep', 'cows', 'apples', 'bananas', 'oranges', 'lemons', 'lambo', 'ferra', 'merce', 'porsc', true, 'hola mundo', undefined, {…}, ƒ, 123, -10]