import React from 'react'
import { Routes, Route } from "react-router-dom"
import LoginPage from '../pages/user/LoginPage.jsx'
import SignUpPage from '../pages/user/SignUpPage.jsx'
import ProfilePage from '../pages/user/ProfilePage.jsx'
import HomePage from '../pages/user/HomePage.jsx'
import UserLoginAuth from '../Authentication/UserLoginAuth.jsx'
import UserLogoutAuth from '../Authentication/UserLogoutAuth.jsx'

function UserRoutes() {
     return (
          <Routes>
               <Route path='/' element={<><HomePage /></>} />
               <Route path='/login' element={<><LoginPage /></>} />
               <Route path='/signup' element={<> <SignUpPage /> </>} />
               <Route path='/profile' element={<> <ProfilePage /> </>} />
          </Routes>
     )
}

export default UserRoutes