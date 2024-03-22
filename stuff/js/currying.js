function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

var r = add(1)(2)(3)

console.log(r)
// VM402: 11 6