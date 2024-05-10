import { logger, showFeedback } from '../utils'

import logic from '../logic'

function Login({ onUserLoggedIn, onRegisterClick, onFeedback }) {
    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const username = form.username.value
        const password = form.password.value

        logger.debug('Login -> handleSubmit', username, password)

        try {
            logic.loginUser(username, password)
                .then(() => {
                    form.reset()

                    onUserLoggedIn()
                })
                .catch(error => onFeedback(error.message, 'error'))
        } catch (error) {
            onFeedback(error.message, 'error')
        }
    }

    const handleRegisterClick = event => {
        event.preventDefault()

        onRegisterClick()
    }

    logger.debug('Login -> render')

    return <main>
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input id="username" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" />

            <button className="round-button" type="submit">Login</button>
        </form>

        <a href="" onClick={handleRegisterClick}>Register</a>
    </main>
}

export default Login