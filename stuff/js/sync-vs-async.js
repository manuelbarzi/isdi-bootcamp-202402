console.log('start')

//const before = Date.now()
//while(Date.now() - before < 3000);
//for(; Date.now() - before < 3000;);

function setTimeoutSync(callback, millis) {
    const before = Date.now()
    while (Date.now() - before < millis);

    callback()
}

setTimeoutSync(() => {
    console.log('continue 1')

    setTimeout(() => console.log('continue 2'), 4000)
}, 1000)

setTimeoutSync(() => console.log('continue 3'), 3000)

setTimeout(() => {
    console.log('continue 4')

    setTimeoutSync(() => console.log('continue 5'), 5000)
}, 0)

console.log('end')
// VM391:1 start
// VM391:15 continue 1
// VM391:20 continue 3
// VM391:28 end
// undefined
// VM391:23 continue 4
// VM391:25 continue 5
// VM391:17 continue 2