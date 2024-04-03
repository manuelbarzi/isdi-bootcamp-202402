type User = {
    name: string
    age?: number
}

const users = []

let user: User

user = {
    name: 'Peter'
}

users.push(user)

user = {
    name: 'Wendy',
    age: 19
}

users.push(user)