import express from 'express'
import { connect } from './config/dataBase.js'
import morgan from 'morgan'
import userRoutes from './routes/userRoutes.js'
import ticketsRoutes from './routes/ticketRoutes.js'
import movieRoutes from './routes/movieRoutes.js'
import AuthRoutes from './routes/authRoutes.js'
import dotenv from 'dotenv'

dotenv.config()
const api = express()
api.use(express.json())

// Tokens personalizados de Morgan
morgan.token('body', (req) => JSON.stringify(req.body))
morgan.token('hostname', (req) => req.hostname)
morgan.token('query', (req) => JSON.stringify(req.query))
api.use(morgan(':hostname :method :url :status :query - :response-time ms Body :body'))

const PORT = process.env.PORT || 3000

// Aquí van las rutas
api.use('/api/v1/auth', AuthRoutes)
api.use('/api/v1/', userRoutes)
api.use('/api/v1', ticketsRoutes)
api.use('/api/v1', movieRoutes)

// Conectamos a la base de datos
connect().then(() => {
  api.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT} 🚀`)
  })
})
