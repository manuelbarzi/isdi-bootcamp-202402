class Login extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <main>
            <h1>Login</h1>

            <form onSubmit={function (event) {
                event.preventDefault()

                var form = event.target

                var username = form.username.value
                var password = form.password.value

                console.log('hola mundo', username, password)
            }}>
                <label>Username</label>
                <input name="username" />
                <label>Password</label>
                <input type="password" name="password" />
                <button className="round-button" type="submit">Login</button>
            </form>

            <a href="">Register</a>
        </main>
    }
}