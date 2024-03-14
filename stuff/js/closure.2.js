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

console.log(count())
console.log(count())
console.log(count())

// VM1351:17 1
// VM1351:18 2
// VM1351:19 3