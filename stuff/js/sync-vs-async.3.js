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

setTimeout(() => console.log('continue 2'), 4000)

setTimeoutSync(() => console.log('continue 3'), 3000)

setTimeout(() => console.log('continue 4'), 0)

setTimeoutSync(() => console.log('continue 5'), 5000)

console.log('end')
// VM380:1 start
// VM380:14 continue 1
// VM380:18 continue 3
// VM380:22 continue 5
// VM380:24 end
// undefined
// VM380:20 continue 4
// VM380:16 continue 2