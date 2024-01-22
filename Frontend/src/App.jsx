import React from 'react'
import LoginPage from './pages/user/LoginPage'
import SignupPage from './pages/user/SignUpPage'
import HomePage from './pages/user/HomePage'
import ProfilePage from './pages/user/ProfilePage'
import Login from './components/admin/login/Login'

function App() {
  return (
    <div>
      <LoginPage></LoginPage>
      <SignupPage></SignupPage>
      <Login></Login>
    </div>
  )
}

export default App