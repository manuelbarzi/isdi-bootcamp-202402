import logic from './logic.mjs'

import Landing from './Landing.mjs'

if (logic.isUserLoggedIn())
    location.href = './home/index.html'
else {
    const landing = new Landing

    landing.assembleTo(document.body)
}