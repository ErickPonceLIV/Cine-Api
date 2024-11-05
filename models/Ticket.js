import mongoose from 'mongoose'

const ticketSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  ticketCount: { type: Number, required: true },
  ticketValue: { type: Number, required: true },
  totalValue: { type: Number, required: true },
  showTime: { type: Date, required: true },
  seats: [{ type: String, required: true }] // Asientos como array de strings
})

const Ticket = mongoose.model('Ticket', ticketSchema)

export default Ticket
