import Movie from '../models/Movie.js'

// Creamos CRUD

// CREATE
const createMovie = async (req, res) => {
  try {

  } catch (error) {

  }
}

// READ
const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find()
    res.status(200).json(movies)
  } catch (error) {
    res.status(400).json({ message: 'Error al obtener los boletos', error })
  }
}

const getMovieById = async (req, res) => {
  try {

  } catch (error) {

  }
}

// UPDATE
const updateMovie = async (req, res) => {
  try {

  } catch (error) {

  }
}

// DELETE
const deleteMovie = async (req, res) => {
  try {

  } catch (error) {

  }
}

export { getAllMovies, createMovie, getMovieById, updateMovie, deleteMovie }
