// importamos el modelo user
import User from '../models/user.js'

// hacemos las operaciones con el modelo, haciendo un CRUD

// CREATE
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.status(201).json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// READ

// UPDATE

// DELETE

export { createUser }
