import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  rating: { type: Number, required: true, min: 0, max: 5 },
  duration: { type: Number, required: true }, // En minutos
  genre: { type: String, required: true }
}, {
  timestamps: true // Agrega los campos createdAt y updatedAt
})

const Movie = mongoose.model('Movie', movieSchema)

export default Movie
