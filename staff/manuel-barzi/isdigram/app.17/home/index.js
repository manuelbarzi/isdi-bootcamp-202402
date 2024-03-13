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

    Component.prototype.add = function () {
        var children = arguments

        Array.prototype.forEach.call(children, function (child) {
            if (!(child instanceof Component)) throw new TypeError('child is not a Component')
        })

        Array.prototype.forEach.call(children, function (child) {
            this._container.appendChild(child._container)
        }.bind(this))
    }

    Component.prototype.assembleTo = function (element) {
        if (!(element instanceof HTMLElement)) throw new TypeError('element is not an HTMLElement')

        element.appendChild(this._container)
    }

    Component.prototype.onClick = function (callback) {
        this._container.onclick = callback
    }

    // atomic custom components 

    function Image() {
        Component.call(this, 'img')
    }

    Image.prototype = Object.create(Component.prototype)
    Image.prototype.constructor = Image

    Image.prototype.setSource = function (source) {
        if (typeof source !== 'string') throw new TypeError('source is not a string')

        this._container.src = source
    }

    // molecular custom components

    function Menu() {
        Component.call(this, 'nav')

        var chatButton = new Component('button')
        chatButton.setText('💬')

        this.add(chatButton)

        var exitButton = new Component('button')
        exitButton.setText('🚪')

        exitButton.onClick(function () {
            logic.logoutUser()

            location.href = '../login'
        })

        this.add(exitButton)
    }

    Menu.prototype = Object.create(Component.prototype)
    Menu.prototype.constructor = Menu

    function Post(post) {
        Component.call(this, 'article')

        var author = new Component('h3')
        author.setText(post.author.username)

        var picture = new Image
        picture.setSource(post.image)

        var paragraph = new Component('p')
        paragraph.setText(post.text)

        var dateTime = new Component('time')
        dateTime.setText(post.date)

        this.add(author, picture, paragraph, dateTime)

        if (post.author.id === logic.getLoggedInUserId()) {
            var deleteButton = new Component('button')
            deleteButton.setText('🗑️')

            deleteButton.onClick(function () {
                if (confirm('delete post?'))
                    try {
                        logic.removePost(post.id)

                        // TODO renderPosts() ?
                    } catch (error) {
                        console.error(error)

                        alert(error.message)
                    }
            })

            var editButton = new Component('button')
            editButton.setText('📝')

            editButton.onClick(function () {
                // TODO open edit panel
            })

            this.add(deleteButton, editButton)
        }
    }

    Post.prototype = Object.create(Component.prototype)
    Post.prototype.constructor = Post

    function Posts() {
        Component.call(this, 'section')

        var posts = logic.retrievePosts()

        posts.forEach(function (post) {
            var post2 = new Post(post)

            this.add(post2)
        }.bind(this))
    }

    Posts.prototype = Object.create(Component.prototype)
    Posts.prototype.constructor = Posts

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

    var menu = new Menu

    home.add(menu)

    var posts = new Posts

    home.add(posts)
})()