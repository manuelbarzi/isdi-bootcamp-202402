delete Array.prototype.forEach

function forEach(array, callback) {
    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        callback(element, i, array)
    }
}

console.log('CASE 1')

var nums = [10, 20, 30, 40, 50]

forEach(nums, function (num) {
    console.log(num)
})
// 10
// 20
// 30
// 40
// 50

console.log('CASE 2')

var nums = [10, 20, 30, 40, 50]
var sum = 0

forEach(nums, function (num) {
    sum += num
})

console.log(sum)
// 150

console.log('CASE 3')

var nums = [10, 20, 30, 40, 50]

forEach(nums, function (num, index) {
    console.log(num + index)
})
// 10
// 21
// 32
// 43
// 54

console.log('CASE 4')

var nums = [10, 20, 30, 40, 50]

forEach(nums, function (num, index, array) {
    console.log(num + index + array.length)
})
// 15
// 26
// 37
// 48
// 59