import express from 'express'
import { login, signup, editProfile } from '../controllers/userController.js'
const user_route = express.Router()

user_route.post('/login',login)
user_route.post('/signup',signup)
user_route.post('/editProfile',editProfile)

export default user_route