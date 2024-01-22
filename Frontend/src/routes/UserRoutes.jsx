import React from 'react'
import { Routes, Route } from "react-router-dom"
import LoginPage from '../pages/user/LoginPage.jsx'
import SignUpPage from '../pages/user/SignUpPage.jsx'
import ProfilePage from '../pages/user/ProfilePage.jsx'
import HomePage from '../pages/user/HomePage.jsx'
import UserLoginAuth from '../Authentication/UserLoginAuth.jsx'
import UserLogoutAuth from '../Authentication/UserLogoutAuth.jsx'

function userRoutes() {
     return (
          <Routes>
               <Route path='/' element={<UserLoginAuth><HomePage/></UserLoginAuth>}></Route>
               <Route path='/login' element={<UserLogoutAuth><LoginPage/></UserLogoutAuth>}></Route>
               <Route path='/signup' element={<UserLogoutAuth> <SignUpPage /> </UserLogoutAuth>} />
               <Route path='/profile' element={<UserLoginAuth> <ProfilePage /> </UserLoginAuth>} />
          </Routes>
     )
}

export default userRoutes
