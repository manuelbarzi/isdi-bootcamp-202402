new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hola mundo 0')
        //reject(new Error('hola error 0'))
    }, 1000)
})
    .then(value => console.log(value))
    .catch(error => console.error(error))
    .then(() => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hola mundo 1')
            //reject(new Error('hola error 1'))
        }, 1000)
    })
        .then(value => console.log(value))
        .then(() => new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('hola mundo 2')
                //reject(new Error('hola error 2'))
            }, 1000)
        })
        )

    )
    .then(value => console.log(value))
    .then(() => console.log('hola mundo 3'))
    .catch(error => console.error(error))
    .then(() => console.log('hola mundo 4'))
    .catch(error => console.error(error))
    .then(() => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hola mundo 5')
            //reject(new Error('hola error 5'))
        }, 1000)
    })
        .then(value => console.log(value))
    )
    .then(() => console.log('hola mundo 6'))
    .catch(error => console.error(error))


// Promise {<pending>}
// VM537:7 hola mundo 0
// VM537:15 hola mundo 1
// VM537:25 hola mundo 2
// VM537:26 hola mundo 3
// VM537:28 hola mundo 4
// VM537:36 hola mundo 5
// VM537:38 hola mundo 6