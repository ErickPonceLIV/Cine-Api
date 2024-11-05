// models/Ticket.js
import mongoose from 'mongoose'

const ticketSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
    required: true
  },
  quantity: { type: Number, required: true },
  ticketPrice: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  showTime: { type: Date, required: true },
  seats: [{ type: String, required: true }] // Lista de asientos seleccionados
})

export default mongoose.model('Ticket', ticketSchema)
