// presentation

(function () {
    if (!logic.isUserLoggedIn()) {
        location.href = '../login'

        return
    }

    // util

    function showFeedback(error) {
        console.error(error)

        alert(error.message)
    }

    // component

    function Component(tagName) {
        this._container = document.createElement(tagName)
    }

    Component.prototype.setText = function (text) {
        this._container.innerText = text
    }

    Component.prototype.add = function (child) {
        if (!(child instanceof Component)) throw new TypeError('child is not a Component')

        this._container.appendChild(child._container)
    }

    Component.prototype.assembleTo = function (element) {
        if (!(element instanceof HTMLElement)) throw new TypeError('element is not an HTMLElement')

        element.appendChild(this._container)
    }

    // home

    var home = new Component('main')

    home.assembleTo(document.body)

    try {
        var user = logic.retrieveUser()

        var title = new Component('h1')
        title.setText('Hello, ' + user.name + '!')

        home.add(title)
    } catch (error) {
        showFeedback(error)
    }

    var menu = new Component('micky')

    var chatButton = new Component('button')
    chatButton.setText('💬')

    menu.add(chatButton)

    var exitButton = new Component('button')
    exitButton.setText('🚪')

    menu.add(exitButton)

    home.add(menu)
})()