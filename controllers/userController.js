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
    const users = await User.find()
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
// Borrado físico: Voy a comprobar si existe un query string llamado 'destroy' y si su valor es 'true' voy a borrar el resitro de la base de datos. ?destroy=true
const deleteUserById = async (req, res) => {
  if (req.query.destroy === 'true') {
    try {
      const deleteUser = await User.findByIdAndDelete(req.params.userId)
      if (!deleteUser) {
        return res.status(404).json({ error: 'User not found' })
      }
      res.status(204).json({ message: 'User deleted' })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
  // SOFT DELETE, borrado logico, cambio de estado de isActive
  try {
    const userUpdate = await User.findByIdAndUpdate(req.params.id, { isActive: false }, { new: false })
    if (userUpdate === null || userUpdate === false) {
      return res.status(404).json({ error: 'User not found' })
    }
  } catch (error) {
    res.status(400).json({ message: 'Error Deleting User', error })
  }
}

export { createUser, getAllUsers, getUserById, updateUser, deleteUserById }
