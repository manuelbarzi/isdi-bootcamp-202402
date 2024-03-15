{
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
            showFeedback(error)
        }

        const menu = new Menu

        home.add(menu)

        const posts = new Posts

        home.add(posts)
    }
}