import logic from '../../logic.mjs'

import Component from '../../core/Component.mjs'
import Button from '../../core/Button.mjs'

class Menu extends Component {
    constructor() {
        super('nav')

        const chatButton = new Button
        chatButton.setText('💬')

        const exitButton = new Button
        exitButton.setText('🚪')

        exitButton.onClick(() => {
            logic.logoutUser()

            location.href = '../login'
        })

        this.add(chatButton, exitButton)
    }
}

export default Menu