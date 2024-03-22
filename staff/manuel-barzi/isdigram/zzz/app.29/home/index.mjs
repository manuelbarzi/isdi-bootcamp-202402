import logic from '../logic.mjs'

import Home from './Home.mjs'

if (!logic.isUserLoggedIn())
    location.href = '../login/index.html'
else {
    const home = new Home

    home.assembleTo(document.body)
}