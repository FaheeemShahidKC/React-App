import React from 'react'
import LoginPage from './pages/user/LoginPage'
import SignupPage from './pages/user/SignupPage'
import HomePage from './pages/user/HomePage'
import ProfilePage from './pages/user/ProfilePage'

function App() {
  return (
    <div>
      <LoginPage></LoginPage>
      <SignupPage></SignupPage>
      <HomePage></HomePage>
      <ProfilePage></ProfilePage>
    </div>
  )
}

export default App
