import { Component } from 'react'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'

class App extends Component {
  constructor() {
    super()

    this.state = { view: 'landing' }
  }

  render() {
    if (this.state.view === 'landing')
      return <Landing onLoginClick={() => this.setState({ view: 'login' })} onRegisterClick={() => this.setState({ view: 'register' })} />
    else if (this.state.view === 'login')
      return <Login onRegisterClick={() => this.setState({ view: 'register' })} />
    else if (this.state.view === 'register')
      return <Register onLoginClick={() => this.setState({ view: 'login' })} />
    else
      return <h1>🤨</h1>
  }
}

export default App
