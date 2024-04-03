"use strict";
// 🐖 ts-node stuff/ts/demo/add.demo.ts
Object.defineProperty(exports, "__esModule", { value: true });
var add_1 = require("./add");
//const r = add(1, '2') // ts alerts me if incongruent types here
var r = (0, add_1.default)(1, 2);
console.log(r);
