delete Array.prototype.push

function push(array, ...elements) {
    // TODO implement me

    if (elements.length > 0)
        array[array.length] = elements[0]

    return array.length
}

console.log('CASE 1')

{
    const nums = [100, 200, 300, 400, 500]

    const length = push(nums, 600)

    console.log(length)
    // 6
    console.log(nums)
    // [100, 200, 300, 400, 500, 600]
}


console.log('CASE 2')

{
    const animals = ['pigs', 'goats', 'sheep']

    const length = push(animals, 'cows')

    console.log(length)
    // 4
    console.log(animals)
    // ['pigs', 'goats', 'sheep', 'cows']
}


console.log('CASE 3')

{
    const sports = ['soccer', 'baseball']

    const length = push(sports)

    console.log(length)
    // 2
    console.log(sports)
    // ['soccer', 'baseball']
}


console.log('CASE 4')

{
    const sports = ['soccer', 'baseball']

    const length = push(sports, undefined)

    console.log(length)
    // 3
    console.log(sports)
    // ['soccer', 'baseball', undefined]
}