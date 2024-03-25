const o = { name: 'Oswald', age: 20 },
    p = { nam: 'Peter', ag: 19 },
    q = { 0: 'Quentin', 1: 50, length: 2 },
    r = ['Robert', 70],
    s = ['UK', 'Simon', 60]

//const name = o.name
//const age = o.age

//const { name, age } = o

//const { nam: name, ag: age } = p

//const { 0: name, 1: age } = q

//const { 0: name, 1: age } = r
// const name = r[0]
// const age = r[1]
//const [name, age] = r
//const [name, age] = q // VM510:19 Uncaught TypeError: q is not iterable

const [, name, age] = s

console.log(name, age)