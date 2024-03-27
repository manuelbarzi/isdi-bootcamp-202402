console.log('start')

//const before = Date.now()
//while(Date.now() - before < 3000);
//for(; Date.now() - before < 3000;);

function setTimeoutSync(callback, millis) {
    const before = Date.now()
    while (Date.now() - before < millis);

    callback()
}

setTimeoutSync(() => console.log('continue 1'), 1000)

setTimeout(() => console.log('continue 2'), 2000)

setTimeoutSync(() => console.log('continue 3'), 3000)

setTimeout(() => console.log('continue 4'), 4000)

setTimeoutSync(() => console.log('continue 5'), 5000)

console.log('end')
// VM335:1 start
// VM335:14 continue 1
// VM335:18 continue 3
// VM335:22 continue 5
// VM335:24 end
// undefined
// VM335:16 continue 2
// VM335:20 continue 4