delete Array.prototype.forEach

var testingTools = require('./testing-tools')

function forEach(array, callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        callback(element, i, array)
    }
}

console.log('CASE 1: copy nums [10, 20, 30, 40, 50] into other')

var nums = [10, 20, 30, 40, 50]
var other = []

forEach(nums, function (num) {
    other[other.length] = num
})

testingTools.assertHasValues(nums, 10, 20, 30, 40, 50)
testingTools.assertHasValues(other, 10, 20, 30, 40, 50)


console.log('CASE 2: copy nums into other')

var nums = [10, 20, 30, 40, 50]
var sum = 0

forEach(nums, function (num) {
    sum += num
})

testingTools.assertEqualsValue(sum, 150)
// 150


console.log('CASE 3: num + index')

var nums = [10, 20, 30, 40, 50]
var other = []

forEach(nums, function (num, index) {
    other[other.length] = num + index
})

testingTools.assertHasValues(other, 10, 21, 32, 43, 54)


console.log('CASE 4: num + index + array.length')

var nums = [10, 20, 30, 40, 50]
var other = []

forEach(nums, function (num, index, array) {
    other[other.length] = num + index + array.length
})

testingTools.assertHasValues(other, 15, 26, 37, 48, 59)


console.log('CASE 5: no callback (undefined)')

var nums = [10, 20, 30, 40, 50]

try {
    forEach(nums)
} catch (error) {
    testingTools.assertError(error, 'TypeError', 'undefined is not a function')
}


console.log('CASE 6: {} as callback')

var nums = [10, 20, 30, 40, 50]

try {
    forEach(nums, {})
} catch (error) {
    testingTools.assertError(error, 'TypeError', '[object Object] is not a function')
}


console.log('CASE 7: 123 as callback')

var nums = [10, 20, 30, 40, 50]

try {
    forEach(nums, 123)
} catch (error) {
    testingTools.assertError(error, 'TypeError', '123 is not a function')
}


console.log('CASE 8: true as callback')

var nums = [10, 20, 30, 40, 50]

try {
    forEach(nums, true)
} catch (error) {
    testingTools.assertError(error, 'TypeError', 'true is not a function')
}

console.log('CASE 9: false as callback')

var nums = [10, 20, 30, 40, 50]

try {
    forEach(nums, !true)
} catch (error) {
    testingTools.assertError(error, 'TypeError', 'false is not a function')
}