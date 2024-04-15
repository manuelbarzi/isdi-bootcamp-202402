new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('hola mundo')
        reject(new Error('hola error'))
    }, 3000)
})
    .then(value => console.log(value))
    .catch(error => console.error(error))


// Promise {
//     <pending>}
//         864-be3b23b05591c60c.js:1 Error: hola error
//         at <anonymous>:4:16