// data layer

function findUser(callback) {
    var users = JSON.parse(localStorage.users || '[]')

    var user = users.find(callback)

    return user
}

function insertUser(user) {
    var users = JSON.parse(localStorage.users || '[]')

    users.push(user)

    localStorage.users = JSON.stringify(users)
}

var data = {
    findUser: findUser,
    insertUser: insertUser
}