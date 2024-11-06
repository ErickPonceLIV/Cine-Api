import express from 'express'
import { connect } from './config/dataBase.js'
import userRoutes from './routes/userRoutes.js'
import morgan from 'morgan'

const api = express()
api.use(express.json())

// Tokens personalizados de Morgan
morgan.token('body', (req) => JSON.stringify(req.body))
morgan.token('hostname', (req) => req.hostname)
morgan.token('query', (req) => JSON.stringify(req.query))
api.use(morgan(':hostname :method :url :status :query - :response-time ms Body :body'))

const PORT = process.env.PORT || 3000

// Aquí van las rutas
api.use('/api/v1/', userRoutes)

// Conectamos a la base de datos
connect().then(() => {
  api.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT} 🚀`)
  })
})
