import express from 'express'
import * as movieController from '../controllers/movieController.js'

const movieRoutes = express.Router()

// Rutas de Movie
movieRoutes.post('/', movieController.createMovie) // Crear una nueva película
movieRoutes.get('/', movieController.getAllMovies) // Obtener todas las películas
movieRoutes.get('/:movieId', movieController.getMovieById) // Obtener una película por ID
movieRoutes.patch('/:movieId', movieController.updateMovieById) // Actualizar una película por ID
movieRoutes.delete('/:movieId', movieController.deleteMovieById) // Eliminar una película por ID

export default movieRoutes
