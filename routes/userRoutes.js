import express from 'express'
import * as userController from '../controllers/userController.js'

const UserRoutes = express.Router()

UserRoutes.get('/users', userController.getAllUsers)
UserRoutes.get('/users/:id', userController.getUserById)
UserRoutes.post('/users', userController.createUser)
UserRoutes.put('/users/:id', userController.updateUser)
UserRoutes.delete('/users/:id', userController.deleteUser)

export default UserRoutes
