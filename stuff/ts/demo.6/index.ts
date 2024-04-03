type User = {
    name: string
    age?: number
}

const users: User[] = []
// const users: Array<User> = []

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

type OtherUser = {
    fullname: string
    ageNow: number
}

let otherUser
//let otherUser: OtherUser

otherUser = {
    fullname: 'James Hook',
    ageNow: 42
}

users.push(otherUser)
