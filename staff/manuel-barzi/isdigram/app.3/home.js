// presentation

var title = document.querySelector('h1')
var logoutButton = document.querySelector('button')

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