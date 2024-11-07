import express from 'express'
import * as ticketController from '../controllers/ticketController.js'
import { isCostumer } from '../middlewares/Role.js'
import { isAuth } from '../middlewares/isAuth.js'

const ticketsRoutes = express.Router()

// Rutas de Ticket
ticketsRoutes.post('/', isAuth, isCostumer, ticketController.createTicket) // Crear un nuevo ticket
ticketsRoutes.get('/', isAuth, isCostumer, ticketController.getAllTickets) // Obtener todos los tickets
ticketsRoutes.get('/:ticketId', isAuth, isCostumer, ticketController.getTicketById) // Obtener un ticket por ID
ticketsRoutes.patch('/:ticketId', isAuth, isCostumer, isAuth, ticketController.updateTicketById) // Actualizar un ticket por ID
ticketsRoutes.delete('/:ticketId', isAuth, isCostumer, isAuth, ticketController.deleteTicketById) // Eliminar un ticket por ID

export default ticketsRoutes
