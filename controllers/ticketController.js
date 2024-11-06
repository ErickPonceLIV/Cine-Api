// En el controlador de Ticket
import Ticket from '../models/Ticket.js'

// Creamos CRUD

// CREATE
const createTicket = async (req, res) => {
  try {
    const ticket = await Ticket.create(req.body)
    res.status(201).json(ticket)
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el boleto', error })
  }
}

// READ
const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find()
      .populate('user', 'firstName lastName email') // Cargar datos del usuario (seleccionando solo ciertos campos)
      .populate('movie', 'title director') // Cargar datos de la película

    res.status(200).json(tickets)
  } catch (error) {
    res.status(400).json({ message: 'Error al obtener los boletos', error })
  }
}

const getTicketById = async (req, res) => {
  try {
    
  } catch (error) {
    
  }
}

// DELETE
const deleteTicket = async (req, res) => {
  try {
    
  } catch (error) {
    
  }
}

// UPDATE
const updateTicket = async (req, res) => {
  try {
    
  } catch (error) {
    
  }
}

export { createTicket, getAllTickets, getTicketById, deleteTicket, updateTicket }
