console.log(hello())

function hello() { return 'Hello!' }
// VM1231:1 Hello!



// same as

var hello = function () { return 'Hello!' }

console.log(hello())
// VM1237: 3 Hello!



// NOT same as

var hello

console.log(hello())

hello = function () { return 'Hello!' }
// VM1299: 3 Uncaught TypeError: hello is not a function
//     at<anonymous>: 3: 13