const h1 = React.createElement('h1', { style: { backgroundColor: 'red' } }, 'hola mundo')

const colors = ['Red', 'Blue', 'Yellow']

const items = colors.map(color => React.createElement('li', null, color))

const list = React.createElement('ul', null, items)

class Hello extends React.Component {
    constructor() {
        super()
    }

    render() {
        return React.createElement('h1', null, 'Hello!')
    }
}

const hello = new Hello

const _jsx_ = (tagName, props) => React.createElement(tagName, props)

const h2 = _jsx_('h2', { children: 'hola h2' })

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render([h1, list, hello.render(), h2])