import express from 'express'
import * as userController from '../controllers/userController.js'
import { isAdmin } from '../middlewares/IsAdminOrEmployee.js'

const UserRoutes = express.Router()

UserRoutes.get('/users', isAdmin, userController.getAllUsers)
UserRoutes.get('/users/:id', isAdmin, userController.getUserById)
UserRoutes.post('/login', userController.login)
UserRoutes.post('register', userController.register)
UserRoutes.patch('/users/:id', isAdmin, userController.updateUser)
UserRoutes.delete('/users/:id', isAdmin, userController.deleteUserById)

export default UserRoutes
