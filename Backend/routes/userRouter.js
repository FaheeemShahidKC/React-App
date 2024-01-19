import express from 'express'
import { login, signup } from '../controllers/userController.js'
const user_route = express.Router()


user_route.post('/',login)
user_route.post('/signup',signup)

export default user_route