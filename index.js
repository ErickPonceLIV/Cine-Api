import express from 'express'

const api = express()

api.use(express.json())

const PORT = process.env.PORT || 3000

api.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`)
})
