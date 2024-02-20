delete Array.prototype.splice

function splice(array, start, deleteCount, item) {
    if (deleteCount === 0) {
        for (var i = array.length - 1; i > start - 1; i--) {
            var elem = array[i]

            array[i + 1] = elem
        }

        array[start] = item

        return []
    } else if (deleteCount === 1) {
        var removed = []

        removed[removed.length] = array[start]

        array[start] = item

        return removed
    }
}

console.log('CASE 1')

var months = ['Jan', 'March', 'April', 'June']

var extracted = splice(months, 1, 0, 'Feb')
// array // ['Jan', 'March', 'April', 'June']
// start // 1
// deleteCount // 0
// item // 'Feb'

// ['Jan', 'March', 'April', 'June', 'June']
// ['Jan', 'March', 'April', 'April', 'June']
// ['Jan', 'March', 'March', 'April', 'June']

// ['Jan', 'Feb', 'March', 'April', 'June']

console.log(extracted)
// []

console.log(months)
// ["Jan", "Feb", "March", "April", "June"]


console.log('CASE 2')

var months = ['Jan', 'Feb', 'March', 'April', 'June']

var extracted = splice(months, 4, 3, 'May')

// ['Jan', 'Feb', 'March', 'April', 'June']
// var removed = []
// removed[removed.length] = array[start]
// array[start] = item
// return removed

console.log(extracted)
// ['June']

console.log(months)
// ["Jan", "Feb", "March", "April", "May"]