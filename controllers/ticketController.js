import Ticket from '../models/Ticket.js'
import User from '../models/User.js'
import Movie from '../models/Movie.js'

// CREATE Ticket
const createTicket = async (req, res) => {
  const { userId, movieId, quantity, ticketPrice, showTime, seats } = req.body

  // Validaciones
  if (!userId || !movieId || !quantity || !ticketPrice || !showTime || !seats) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  // Validar que el usuario exista
  const user = await User.findById(userId)
  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }

  // Validar que la película exista
  const movie = await Movie.findById(movieId)
  if (!movie) {
    return res.status(404).json({ message: 'Movie not found' })
  }

  // Calcular el total del precio del boleto
  const totalPrice = quantity * ticketPrice

  try {
    const newTicket = await Ticket.create({
      user: userId,
      movie: movieId,
      quantity,
      ticketPrice,
      totalPrice,
      showTime,
      seats
    })
    res.status(201).json(newTicket)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// READ All Tickets
const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find().populate('user', 'name email -_id').populate('movie', 'title genre -_id')
    res.status(200).json(tickets)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// READ Ticket by ID
const getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.ticketId).populate('user', 'name email -_id').populate('movie', 'title genre -_id')
    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' })
    }
    res.status(200).json(ticket)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// UPDATE Ticket
const updateTicketById = async (req, res) => {
  try {
    const updatedTicket = await Ticket.findByIdAndUpdate(req.params.ticketId, req.body, { new: true })
    if (!updatedTicket) {
      return res.status(404).json({ message: 'Ticket not found' })
    }
    res.status(200).json(updatedTicket)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// DELETE Ticket
const deleteTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.ticketId)
    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' })
    }
    res.status(204).end()
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export {
  createTicket,
  getAllTickets,
  getTicketById,
  updateTicketById,
  deleteTicketById
}
