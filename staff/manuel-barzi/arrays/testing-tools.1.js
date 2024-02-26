function assertHasValues(iterable) {
    var count = arguments.length - 1

    for (var n = 0; n < count; n++) {
        var current = iterable[n]
        var target = arguments[n + 1]

        console.assert(current === target, 'for index ' + n + ', ' + current + ' equals ' + target)
    }

    console.assert(iterable.length === count, 'length ' + iterable.length + ' equals ' + count)
}

function assertEqualsValue(value, target) {
    console.assert(value === target, target)
}

function assertError(error, type, message) {
    console.assert(error.name === type, 'name')
    console.assert(error.message === message, 'message')
}

module.exports = {
    assertHasValues: assertHasValues,
    assertEqualsValue: assertEqualsValue,
    assertError: assertError
}