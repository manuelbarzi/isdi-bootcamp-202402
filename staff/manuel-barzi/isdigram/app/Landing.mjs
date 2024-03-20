import Component from './core/Component.mjs'
import Link from './core/Link.mjs'

class Landing extends Component {
    constructor() {
        super('main')

        const title = new Component('h1')
        title.setText('App')

        const loginLink = new Link
        loginLink.setText('Login')
        loginLink.setHref('../login/index.html')

        const orSpan = new Component('span')
        orSpan.setText(' or ')

        const registerLink = new Link
        registerLink.setText('Register')
        registerLink.setHref('../register/index.html')

        this.add(title, loginLink, orSpan, registerLink)
    }
}

export default Landing