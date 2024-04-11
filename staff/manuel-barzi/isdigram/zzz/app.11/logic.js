// business (logic)

var logic = (function () {
    // constants

    var DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/
    var EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    var PASSWORD_REGEX = /^(?=.*[0-9])(?=.*[A-Za-z])[A-Za-z0-9]+$/
    var URL_REGEX = /^(http|https):\/\//

    // helpers

    function validateText(text, explain, checkEmptySpaceInside) {
        if (typeof text !== 'string') throw new Error(explain + ' ' + text + ' is not a string')
        if (!text.trim().length) throw new Error(explain + ' >' + text + '< is empty or blank')

        if (checkEmptySpaceInside)
            if (text.includes(' ')) throw new Error(explain + ' ' + text + ' has empty spaces')
    }

    function validateDate(date, explain) {
        if (!DATE_REGEX.test(date)) throw new Error(explain + ' ' + date + ' is not a date')
    }

    function validateEmail(email, explain) {
        if (!EMAIL_REGEX.test(email)) throw new Error(explain + ' ' + email + ' is not an email')
    }

    function validatePassword(password, explain) {
        if (!PASSWORD_REGEX.test(password)) throw new Error(explain + ' ' + password + ' is not acceptable')
    }

    function validateUrl(url, explain) {
        if (!URL_REGEX.test(url)) throw new Error(explain + ' ' + url + ' is not an url')
    }

    // logic

    function registerUser(name, birthdate, email, username, password) {
        validateText(name, 'name')
        validateDate(birthdate, 'birthdate')
        validateEmail(email, 'email')
        validateText(username, 'username', true)
        validatePassword(password, 'password')

        // TODO input validation

        var user = data.findUser(function (user) {
            return user.email === email || user.username === username
        })

        if (user) throw new Error('user already exists')

        user = {
            name: name.trim(),
            birthdate: birthdate,
            email: email,
            username: username,
            password: password,
            status: 'offline',
        }

        data.insertUser(user)
    }

    function loginUser(username, password) {
        validateText(username, 'username', true)
        validatePassword(password, 'password')

        var user = data.findUser(function (user) {
            return user.username === username && user.password === password
        })

        if (!user) throw new Error('wrong credentials')

        user.status = 'online'

        data.updateUser(user)

        sessionStorage.userId = user.id
    }

    function retrieveUser() {
        var user = data.findUser(function (user) {
            return user.id === sessionStorage.userId
        })

        if (!user) throw new Error('user not found')

        return user
    }

    function logoutUser() {
        var user = data.findUser(function (user) {
            return user.id === sessionStorage.userId
        })

        if (!user) throw new Error('wrong credentials')

        user.status = 'offline'

        data.updateUser(user)

        delete sessionStorage.userId
    }

    function getLoggedInUserId() {
        return sessionStorage.userId
    }

    function isUserLoggedIn() {
        return !!sessionStorage.userId
    }

    function retrieveUsersWithStatus() {
        var users = data.getAllUsers()

        var index = users.findIndex(function (user) {
            return user.id === sessionStorage.userId
        })

        users.splice(index, 1)

        users.forEach(function (user) {
            delete user.name
            delete user.email
            delete user.password
            delete user.birthdate
        })

        users.sort(function (a, b) {
            return a.username < b.username ? -1 : 1
        }).sort(function (a, b) {
            return a.status > b.status ? -1 : 1
        })


        return users
    }

    function sendMessageToUser(userId, text) {
        validateText(userId, 'userId', true)
        validateText(text, 'text')

        // { id, users: [id, id], messages: [{ from: id, text, date }, { from: id, text, date }, ...] }

        // find chat in chats (by user ids)
        // if no chat yet, then create it
        // add message in chat
        // update or insert chat in chats
        // save chats

        var chat = data.findChat(function (chat) {
            return chat.users.includes(userId) && chat.users.includes(sessionStorage.userId)
        })

        if (!chat)
            chat = { users: [userId, sessionStorage.userId], messages: [] }

        var message = { from: sessionStorage.userId, text: text, date: new Date().toISOString() }

        chat.messages.push(message)

        if (!chat.id)
            data.insertChat(chat)
        else
            data.updateChat(chat)
    }

    function retrieveMessagesWithUser(userId) {
        validateText(userId, 'userId', true)

        var chat = data.findChat(function (chat) {
            return chat.users.includes(userId) && chat.users.includes(sessionStorage.userId)
        })

        if (chat)
            return chat.messages

        return []
    }

    function createPost(image, text) {
        validateUrl(image, 'image')

        if (text)
            validateText(text, 'text')

        var post = {
            author: sessionStorage.userId,
            image: image,
            text: text,
            date: new Date().toLocaleDateString('en-CA')
        }

        data.insertPost(post)
    }

    function retrievePosts() {
        var posts = data.getAllPosts()

        posts.forEach(function (post) {
            var user = data.findUser(function (user) {
                return user.id === post.author
            })

            post.author = { id: user.id, username: user.username }
        })

        return posts.reverse()
    }

    function removePost(postId) {
        validateText(postId, 'postId', true)

        var post = data.findPost(function (post) {
            return post.id === postId
        })

        if (!post) throw new Error('post not found')

        if (post.author !== sessionStorage.userId) throw new Error('post does not belong to user')

        data.deletePost(function (post) {
            return post.id === postId
        })
    }

    function modifyPost(postId, text) {
        validateText(postId, 'postId', true)
        validateText(text, 'text')

        var post = data.findPost(function (post) {
            return post.id === postId
        })

        if (!post) throw new Error('post not found')

        if (post.author !== sessionStorage.userId) throw new Error('post does not belong to user')

        post.text = text

        data.updatePost(post)
    }

    return {
        registerUser: registerUser,
        loginUser: loginUser,
        retrieveUser: retrieveUser,
        logoutUser: logoutUser,
        getLoggedInUserId: getLoggedInUserId,
        isUserLoggedIn: isUserLoggedIn,

        retrieveUsersWithStatus: retrieveUsersWithStatus,
        sendMessageToUser: sendMessageToUser,
        retrieveMessagesWithUser: retrieveMessagesWithUser,

        createPost: createPost,
        retrievePosts: retrievePosts,
        removePost: removePost,
        modifyPost: modifyPost
    }
})()