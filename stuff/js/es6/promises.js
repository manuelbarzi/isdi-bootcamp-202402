function getValueSync() {
    const value = Math.random()

    if (value < .5)
        throw new Error(value)

    return value
}

function getValueAsync(callback) {
    setTimeout(() => {
        const value = Math.random()

        if (value < .5) {
            callback(new Error(value))

            return
        }

        callback(null, value)
    }, 0)
}

// new Promise((resolve, reject) => {
//     try {
//         const value = getValueSync()

//         resolve(value)
//     } catch (error) {
//         reject(error)
//     }
// })
new Promise((resolve, reject) => {
    getValueAsync((error, value) => {
        if (error) {
            reject(error)

            return
        }

        resolve(value)
    })
})
    .then(value => console.log('success', value))
    .then(() => getValueSync())
    .then(value => console.log('success', value))
    .catch(error => console.error('fail', error))

// test 1    
// VM1179:19 success 0.841432865742358
// VM1179:21 success 0.8447264709663247

// test 2
// VM1180:19 success 0.5517919669325699
// VM1180:21 success 0.6721745698856132

// test 3
// VM1182:19 success 0.9244094957897449
// 864-be3b23b05591c60c.js:1 fail Error: 0.2645641588346668
//     at getValue (<anonymous>:7:11)
//     at <anonymous>:20:17