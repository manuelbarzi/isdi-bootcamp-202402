// data layer

function init() {
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

    return {
        findUser: findUser,
        insertUser: insertUser
    }
}

var data = init()