// presentation

(function () {
    var title = document.querySelector('h1')
    var logoutButton = document.querySelector('button')
    var createPostForm = document.querySelector('form')

    try {
        var user = logic.retrieveUser()

        title.innerText = 'Hello, ' + user.name + '!'
    } catch (error) {
        alert(error.message)
    }

    logoutButton.addEventListener('click', function () {
        logic.logoutUser()

        var loginAddress = location.href.replace('home', 'login')

        location.href = loginAddress
    })

    createPostForm.addEventListener('submit', function (event) {
        event.preventDefault()

        var imageInput = createPostForm.querySelector('#image')
        var image = imageInput.value

        var textInput = createPostForm.querySelector('#text')
        var text = textInput.value

        try {
            logic.createPost(image, text)

            createPostForm.reset()
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    })
})()