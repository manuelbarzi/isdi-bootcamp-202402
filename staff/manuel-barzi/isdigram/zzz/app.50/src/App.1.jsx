import { logger } from './utils'

import logic from './logic'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Feedback from './components/Feedback'
import { useState } from 'react'

function App() {
  const [feedback, setFeedback] = useState(null)

  const navigate = useNavigate()

  const goToLogin = () => navigate('/login')

  const handleLoginClick = () => goToLogin()

  const handleRegisterClick = () => navigate('/register')

  const handleUserLoggedIn = () => navigate('/')

  const handleUserLoggedOut = () => goToLogin()

  const handleFeedbackAcceptClick = () => setFeedback(null)

  const handleFeedback = (message, level = 'warn') => setFeedback({ message, level })

  logger.debug('App -> render')

  return <>
    <Routes>
      <Route path="/login" element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Login onRegisterClick={handleRegisterClick} onUserLoggedIn={handleUserLoggedIn} onFeedback={handleFeedback} />} />
      <Route path="/register" element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Register onLoginClick={handleLoginClick} onUserRegistered={handleLoginClick} />} />
      <Route path="/*" element={logic.isUserLoggedIn() ? <Home onUserLoggedOut={handleUserLoggedOut} /> : <Navigate to="/login" />} />
    </Routes>

    {feedback && <Feedback message={feedback.message} level={feedback.level} onAcceptClick={handleFeedbackAcceptClick} />}
  </>
}

export default App