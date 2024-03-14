function counter() {
    var countValue = 0

    function count() {
        var step = 1

        countValue += step

        return countValue
    }

    return count
}

var count = counter()
var count2 = counter()

console.log(count())
console.log(count(), count2())
console.log(count())
console.log(count(), count2())

// VM1420:18 1
// VM1420:19 2 1
// VM1420:20 3
// VM1420:21 4 2