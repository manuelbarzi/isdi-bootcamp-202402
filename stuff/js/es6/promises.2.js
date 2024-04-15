new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hola mundo')
        //reject(new Error('hola error'))
    }, 1000)
})
    .then(value => console.log(value))
    .catch(error => console.error(error))
    .then(() => new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve('hola mundo')
            reject(new Error('hola error'))
        }, 2000)
    }))
    .then(() => console.log('hola mundo'))
    .catch(error => console.error(error))
    .then(() => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hola mundo')
            //reject(new Error('hola error'))
        }, 3000)
    }))
    .then(() => console.log('hola mundo'))
    .catch(error => console.error(error))


// Promise {
//     <pending>}
//         VM411:7 hola mundo
//         864-be3b23b05591c60c.js:1 Error: hola error
//         at <anonymous>:12:20
//             window.console.error @ 864-be3b23b05591c60c.js:1
//             (anonymous) @ VM411:16
//             Promise.catch (async)
//             (anonymous) @ VM411:16
//             VM411:23 hola mundo