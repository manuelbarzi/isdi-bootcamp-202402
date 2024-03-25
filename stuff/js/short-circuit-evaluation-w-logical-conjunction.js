var a = function () { console.log('running A'); return false }
var b = function () { console.log('running B'); return false }

console.log(a() && b())

//VM278:1 running A
//VM278:4 false


var a = function () { console.log('running A'); return false }
var b = function () { console.log('running B'); return !false }

console.log(a() && b())

//VM288:10 running A
//VM288:13 false


var a = function () { console.log('running A'); return !false }
var b = function () { console.log('running B'); return false }

console.log(a() && b())

//VM298:19 running A
//VM298:20 running B
//VM298:22 false


var a = function () { console.log('running A'); return !false }
var b = function () { console.log('running B'); return !false }

console.log(a() && b())

//VM302:29 running A
//VM302:30 running B
//VM302:32 true
