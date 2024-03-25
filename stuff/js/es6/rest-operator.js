/*
function add() {
    const r = Array.prototype.reduce.call(arguments, (accum, val) => accum + val, 0)

    return r
}
*/

/*
function add(...nums) {
    const r = nums.reduce((accum, val) => accum + val, 0)

    return r
}
*/

const add = (...nums) => nums.reduce((accum, val) => accum + val, 0)

console.log(add(1, 2))
console.log(add(1, 2, 3))
console.log(add(1, 2, 3, 4))
console.log(add(1, 2, 3, 4, 5))