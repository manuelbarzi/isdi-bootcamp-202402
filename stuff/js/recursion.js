function forEach(array, callback) {
    var i = 0;

    (function iterate() {
        if (i < array.length) {
            var element = array[i]

            callback(element)

            i++

            iterate()
        }
    })()
}

var a = [10, 20, 30]

forEach(a, elem => console.log(elem))
// VM856:19 10
// VM856:19 20
// VM856:19 30