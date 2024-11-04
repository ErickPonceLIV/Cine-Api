import mongoose from 'mongoose'

const ticketSchema = new mongoose.Schema({
  seat: {
    type: String,
    match: /[A-F]\d{1,2}/, // A1, A2, B1, etc - [A-F]\d{1,2}, con esto valido el formato del asiento en el ticket
    required: true
  },
  price: {
    type: Number,
    min: 0, // no puede ser negativo
    required: true
  }
})

const Ticket = mongoose.model('Ticket', ticketSchema)

export default Ticket
