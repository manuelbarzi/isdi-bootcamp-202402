// 🐖 ts-node stuff/ts/demo/add.demo.ts
// or
// 🐖 tsc stuff/ts/demo/*.ts
// 🐖 node stuff/ts/demo/add.demo.js

import add from './add'

//const r = add(1, '2') // ts alerts me if incongruent types here
const r = add(1, 2)

console.log(r)