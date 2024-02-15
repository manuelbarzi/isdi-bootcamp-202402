delete Array.prototype.includes

function includes(array, value) {
    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        if (element === value)
            return true
    }

    return false
}

console.log('CASE 1')

var nums = [100, 200, 300, 400, 500]

var result = includes(nums, 600)

console.log(result)
// false

console.log('CASE 2')

var animals = ['pigs', 'goats', 'sheep', 'cows']

var result = includes(animals, 'sheep')

console.log(result)
// true

