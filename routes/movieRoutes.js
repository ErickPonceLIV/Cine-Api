import express from 'express'
import * as movieController from '../controllers/movieController.js'
import { isAdmin } from '../middlewares/IsAdminOrEmployee.js'

const movieRoutes = express.Router()

// Rutas de Movie
movieRoutes.post('/movie', isAdmin, movieController.createMovie) // Crear una nueva película
movieRoutes.get('/movie', isAdmin, movieController.getAllMovies) // Obtener todas las películas
movieRoutes.get('/movie/:movieId', isAdmin, movieController.getMovieById) // Obtener una película por ID
movieRoutes.patch('movie/:movieId', isAdmin, movieController.updateMovieById) // Actualizar una película por ID
movieRoutes.delete('/movie/:movieId', isAdmin, movieController.deleteMovieById) // Eliminar una película por ID

export default movieRoutes
