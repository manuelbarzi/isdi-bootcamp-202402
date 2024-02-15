delete Array.prototype.concat

function concat(array, array2) {
    if (arguments.length < 3) {
        var newArray = []

        for (var i = 0; i < array.length; i++) {
            var element = array[i]

            newArray[i] = element
        }

        for (var i = 0; i < array2.length; i++) {
            var element = array2[i]

            newArray[newArray.length] = element
        }

        return newArray
    } else {
        var newArray = []

        for (var i = 0; i < arguments.length; i++) {
            var array = arguments[i]

            for (var j = 0; j < array.length; j++) {
                var element = array[j]

                newArray[newArray.length] = element
            }
        }

        return newArray
    }
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