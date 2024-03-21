const h1 = <h1 style={{ backgroundColor: 'red' }}>hola mundo</h1>

const colors = ['Red', 'Blue', 'Yellow']

const items = colors.map(color => <li>{color}</li>)

const list = <ul>{items}</ul>

class Hello extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <h1>Hello!</h1>
    }
}


const h2 = <h2>hello h2</h2>

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render([h1, list, <Hello />, h2])