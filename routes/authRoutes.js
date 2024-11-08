import express from 'express'
import * as authController from '../controllers/AuthController.js'

const AuthRoutes = express.Router()

AuthRoutes.post('/login', authController.login)
AuthRoutes.post('register', authController.register)

export default AuthRoutes
