type User = {
    name: string
    age: number
}

const users = []

let user: User

user = {
    name: 'Peter',
    age: 20
}

users.push(user)

// user = {
//     nam: 'Wendy',
//     ag_: 19
// }
user = {
    name: 'Wendy',
    age: 19
}

users.push(user)