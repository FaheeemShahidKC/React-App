import express from 'express'
import { login, listUsers, deleteUser, loadEditUser, addUser, editUser } from '../controllers/adminController.js'

const admin_route = express.Router()

admin_route.post('/login',login)
admin_route.post('/listUsers',listUsers)
admin_route.post('/deleteUser',deleteUser)
admin_route.get('/loadEditUser',loadEditUser)
admin_route.post('/editedUser',editUser)
admin_route.post('/addUser',addUser)

export default admin_route