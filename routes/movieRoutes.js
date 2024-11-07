import express from 'express'
import * as movieController from '../controllers/movieController.js'
import { isAdmin } from '../middlewares/Role.js'
import { isAuth } from '../middlewares/isAuth.js'

const movieRoutes = express.Router()

// Rutas de Movie
movieRoutes.post('/movie', isAuth, isAdmin, movieController.createMovie) // Crear una nueva película
movieRoutes.get('/movie', movieController.getAllMovies) // Obtener todas las películas
movieRoutes.get('/movie/:movieId', isAuth, isAdmin, movieController.getMovieById) // Obtener una película por ID
movieRoutes.patch('movie/:movieId', isAuth, isAdmin, movieController.updateMovieById) // Actualizar una película por ID
movieRoutes.delete('/movie/:movieId', isAuth, isAdmin, movieController.deleteMovieById) // Eliminar una película por ID

export default movieRoutes
