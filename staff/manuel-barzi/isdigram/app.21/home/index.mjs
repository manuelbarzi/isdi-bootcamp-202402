import utils from '../utils.mjs'

import logic from '../logic.mjs'

import Component from '../Component.mjs'
import Menu from './components/Menu.mjs'
import Posts from './components/Posts.mjs'

if (!logic.isUserLoggedIn())
    location.href = '../login'
else {
    const home = new Component('main')

    home.assembleTo(document.body)

    try {
        const user = logic.retrieveUser()

        const title = new Component('h1')
        title.setText('Hello, ' + user.name + '!')

        home.add(title)
    } catch (error) {
        utils.showFeedback(error)
    }

    const menu = new Menu

    home.add(menu)

    const posts = new Posts

    home.add(posts)
}