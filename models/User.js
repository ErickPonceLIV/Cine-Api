// models/User.js
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  dni: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  birthdate: { type: Date, required: true },
  role: { type: String, enum: ['ADMIN', 'EMPLOYEE', 'CUSTOMER'], required: true },
  phone: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true, unique: true }
})

const User = mongoose.model('User', userSchema)

export default User
