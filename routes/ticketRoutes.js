import express from 'express'
import * as ticketController from '../controllers/ticketController.js'

const ticketsRoutes = express.Router()

// Rutas de Ticket
ticketsRoutes.post('/', ticketController.createTicket) // Crear un nuevo ticket
ticketsRoutes.get('/', ticketController.getAllTickets) // Obtener todos los tickets
ticketsRoutes.get('/:ticketId', ticketController.getTicketById) // Obtener un ticket por ID
ticketsRoutes.patch('/:ticketId', ticketController.updateTicketById) // Actualizar un ticket por ID
ticketsRoutes.delete('/:ticketId', ticketController.deleteTicketById) // Eliminar un ticket por ID

export default ticketsRoutes
