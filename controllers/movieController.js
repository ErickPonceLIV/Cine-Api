import Movie from '../models/Movie.js'

// CREATE Movie
const createMovie = async (req, res) => {
  const { title, genre, duration, releaseDate } = req.body

  // Validaciones
  if (!title || !genre || !duration || !releaseDate) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  try {
    const newMovie = await Movie.create({ title, genre, duration, releaseDate })
    res.status(201).json(newMovie)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// READ All Movies
const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find()
    res.status(200).json(movies)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// READ Movie by ID
const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.movieId)
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' })
    }
    res.status(200).json(movie)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// UPDATE Movie
const updateMovieById = async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.movieId, req.body, { new: true })
    if (!updatedMovie) {
      return res.status(404).json({ message: 'Movie not found' })
    }
    res.status(200).json(updatedMovie)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// DELETE Movie
const deleteMovieById = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.movieId)
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' })
    }
    res.status(204).end()
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovieById,
  deleteMovieById
}
