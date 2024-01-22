import React from 'react'
import LoginPage from './pages/user/LoginPage'
import SignupPage from './pages/user/SignUpPage'
import HomePage from './pages/user/HomePage'
import ProfilePage from './pages/user/ProfilePage'
import Login from './components/admin/login/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserRoutes from './routes/UserRoutes'
import AdminRoutes from './routes/AdminRoutes'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<UserRoutes />} />
        <Route path='/admin/*' element={<AdminRoutes />} />
      </Routes>
    </Router>
  )
}

export default App