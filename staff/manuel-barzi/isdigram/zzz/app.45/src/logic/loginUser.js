import { validate, errors } from 'com'

function loginUser(username, password, callback) {
    validate.text(username, 'username', true)
    validate.password(password)
    validate.callback(callback)

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        const { status, responseText: json } = xhr

        if (status >= 500) {
            callback(new Error('system error'))

            return
        } else if (status >= 400) { // 400 - 499
            const { error, message } = JSON.parse(json)

            const constructor = errors[error]

            callback(new constructor(message))
        } else if (status >= 300) {
            callback(new Error('system error'))

            return
        } else {
            const userId = JSON.parse(json)

            sessionStorage.userId = userId

            callback(null)
        }
    }

    xhr.open('POST', 'http://localhost:8080/users/auth')

    xhr.setRequestHeader('Content-Type', 'application/json')

    const user = { username, password }

    const json = JSON.stringify(user)

    xhr.send(json)
}

export default loginUser