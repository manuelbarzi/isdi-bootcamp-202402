// business (logic)

var logic = {
    registerUser: function (name, birthdate, email, username, password) {
        var user = data.findUser(function (user) {
            return user.email === email || user.username === username
        })

        if (user) throw new Error('user already exists')

        user = {
            name: name,
            birthdate: birthdate,
            email: email,
            username: username,
            password: password
        }

        data.insertUser(user)
    },

    loginUser: function (username, password) {
        var user = data.findUser(function (user) {
            return user.username === username && user.password === password
        })

        if (!user) throw new Error('wrong credentials')

        sessionStorage.username = username
    },

    retrieveUser: function () {
        var user = data.findUser(function (user) {
            return user.username === sessionStorage.username
        })

        if (!user) throw new Error('user not found')

        return user
    },

    logoutUser: function () {
        sessionStorage.clear()
    }
}