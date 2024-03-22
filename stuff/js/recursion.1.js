function forEach(array, callback) {
    var i = 0

    function iterate() {
        if (i < array.length) {
            var element = array[i]

            callback(element)

            i++

            iterate()
        }
    }

    iterate()
}

var a = [10, 20, 30]

forEach(a, elem => console.log(elem))
// VM849:21 10
// VM849:21 20
// VM849:21 30