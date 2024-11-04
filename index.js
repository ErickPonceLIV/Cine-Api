import express from 'express'
import { connect } from './config/dataBase.js'

const api = express()

api.use(express.json())

const PORT = process.env.PORT || 3000

connect().then(() => {
  api.listen(PORT, () => {
  })
  console.log(`API running on http://localhost:${PORT} 🚀`)
})
