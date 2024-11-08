import express from 'express'
import * as userController from '../controllers/userController.js'
import { isAdmin, IsEmployee } from '../middlewares/Role.js'
import { isAuth } from '../middlewares/isAuth.js'

const UserRoutes = express.Router()

UserRoutes.get('/users', isAuth, isAdmin, IsEmployee, userController.getAllUsers)
UserRoutes.get('/users/:id', isAuth, isAdmin, userController.getUserById)
UserRoutes.patch('/users/:id', isAuth, isAdmin, userController.updateUser)
UserRoutes.delete('/users/:id', isAuth, isAdmin, userController.deleteUserById)

export default UserRoutes
