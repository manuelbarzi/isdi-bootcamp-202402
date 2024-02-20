delete Array.prototype.reduce

function reduce(array, callback, accum) {
    for (var i = 0; i < array.length; i++) {
        var elem = array[i]

        accum = callback(accum, elem)
    }

    return accum
}

console.log('CASE 1')

var cart = [
    { what: 'socks', price: 14.95, qty: 2, brand: 'adidas' },
    { what: 't-shirt', price: 24.85, qty: 3, brand: 'levis' },
    { what: 'shorts', price: 20.15, qty: 4, brand: 'hilfigher' },
    { what: 'bag', price: 200.05, qty: 1, brand: 'dolce gabbana' }
]


var total = reduce(cart, function (amount, item) {
    //return amount + item['price'] * item['qty']
    return amount + item.price * item.qty
}, 0)

/*
function reduce(array, callback, accum) {
    for (var i = 0; i < array.length; i++) {
        var elem = array[i]
    
        accum = callback(accum, elem)
    }

    return accum
}
*/

console.log(total)
// 385.1

console.log('CASE 2')

var cart = [
    { what: 'socks', price: 14.95, qty: 2, brand: 'adidas' },
    { what: 't-shirt', price: 24.85, qty: 3, brand: 'levis' },
    { what: 'shorts', price: 20.15, qty: 4, brand: 'hilfigher' },
    { what: 'bag', price: 200.05, qty: 1, brand: 'dolce gabbana' }
]


var itemsQty = reduce(cart, function (totalQty, item) {
    return totalQty + item.qty
}, 0)

var average = reduce(cart, function (amount, item, index, cart) {
    return amount + item.price * item.qty / itemsQty
}, 0)

//(14.95 * 2 + 24.85 * 3 + 20.15 * 4 + 200.05 * 1) / (2 + 3 + 4 + 1)

console.log(average)
// 38.510000000000005