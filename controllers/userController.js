// importamos el modelo user
import User from '../models/User.js'

// hacemos las operaciones con el modelo, haciendo un CRUD

// CREATE
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.status(201).json(user)
  } catch (error) {
    res.status(500).json({ message: 'Error al crear usuario' })
  }
}
// READ
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.status(200).json(users)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id) // req.params.id es el id que viene en la ruta
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// UPDATE
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
// DELETE
const deleteUser = async (req, res) => {
  try {

  } catch (error) {

  }
}

export { createUser, getAllUsers, getUserById, updateUser, deleteUser }
