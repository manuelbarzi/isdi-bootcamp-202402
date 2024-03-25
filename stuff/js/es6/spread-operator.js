const add = (...nums) => nums.reduce((accum, val) => accum + val, 0)

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// console.log(add(data[0], data[1], ..., data[8])
console.log(add(...data))

//const data2 = []
//data2[0] = data[0]
//...
//data2[8] = data[8]

//const data2 = new Array(...data)
const data2 = [...data]
console.log(data2)

const o = { name: 'Oswald', age: 20 }
//const p = {}
//p.name = o.name
//p.age = o.age
const p = { ...o }
console.log(...p)

//add(p) // fail!
