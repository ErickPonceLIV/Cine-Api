import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const connect = async () => {
  try {
    mongoose.connect(process.env.DB_CONNECT_URI)
    const { connection } = await mongoose
    connection.once('open', () => {
      console.log('MongoDB database connection established successfully')
    })

    connection.on('error', (error) => {
      console.log(error)
    })
  } catch (error) {
    console.log(error, 'Error connecting to MongoDB')
  }
}

export { connect }
