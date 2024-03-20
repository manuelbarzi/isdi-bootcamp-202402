import logic from '../logic.mjs'

import Login from './Login.mjs'

if (logic.isUserLoggedIn())
    location.href = '../home/index.html'
else {
    const login = new Login

    login.assembleTo(document.body)
}