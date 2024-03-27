console.log('start')

//const before = Date.now()
//while(Date.now() - before < 3000);
//for(; Date.now() - before < 3000;);

function setTimeoutSync(callback, millis) {
    const before = Date.now()
    while (Date.now() - before < millis);

    callback()
}

setTimeoutSync(() => console.log('continue 1'), 3000)

setTimeout(() => console.log('continue 2'), 3000)

console.log('end')
// VM303:1 start
// VM303:14 continue 1
// VM303:18 end
// undefined
// VM303:16 continue 2