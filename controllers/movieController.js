// En el controlador de Ticket
import Ticket from '../models/Ticket.js'

export const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find()
      .populate('user', 'firstName lastName email') // Cargar datos del usuario (seleccionando solo ciertos campos)
      .populate('movie', 'title director') // Cargar datos de la película

    res.status(200).json(tickets)
  } catch (error) {
    res.status(400).json({ message: 'Error al obtener los boletos', error })
  }
}
