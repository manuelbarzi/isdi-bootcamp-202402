var a = function () { console.log('running A'); return false }
var b = function () { console.log('running B'); return false }

console.log(a() || b())
//VM229:1 running A
//VM229:2 running B
//VM229:5 false


var a = function () { console.log('running A'); return false }
var b = function () { console.log('running B'); return !false }

console.log(a() || b())

//VM244:11 running A
//VM244:11 running B
//VM244:13 true


var a = function () { console.log('running A'); return !false }
var b = function () { console.log('running B'); return false }

console.log(a() || b())

//VM257:20 running A
//VM257:23 true


var a = function () { console.log('running A'); return !false }
var b = function () { console.log('running B'); return !false }

console.log(a() || b())

//VM267:29 running A
//VM267:32 true