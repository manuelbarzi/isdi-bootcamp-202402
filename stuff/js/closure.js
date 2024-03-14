function safeBox(password, secret) {
    return function (password2) {
        if (password2 !== password) throw new Error('wrong password')

        return secret
    }
}

var getSecret = safeBox('123123123', 'Jordi es Chris Martin')

try {
    getSecret('234234234')
} catch (error) {
    console.error(error)
}

getSecret('123123123')

// VM1717:14 Error: wrong password
//     at <anonymous>:3:43
//     at <anonymous>:12:5
// (anonymous) @ VM1717:14

// 'Jordi es Chris Martin'