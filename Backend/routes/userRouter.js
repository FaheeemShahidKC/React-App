import express from 'express'
import { login, signup, editProfile, loadProfile } from '../controllers/userController.js'
const user_route = express.Router()

user_route.post('/login',login)
user_route.post('/signup',signup)
user_route.post('/editProfile',editProfile)
user_route.get('/loadProfile',loadProfile)

export default user_route