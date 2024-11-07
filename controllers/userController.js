// importamos el modelo user
import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jwt-simple'

// hacemos las operaciones con el modelo, haciendo un CRUD

// CREATE aqui implementare el register y login
// Registrar un nuevo usuario
const register = async (req, res) => {
  const { name, email, password, role } = req.body

  // Validaciones básicas
  if (!name || !email || !password || !role) {
    return res.status(400).send('Process failed: Incomplete data')
  }

  try {
    // Encriptar la contraseña con bcrypt
    const saltRounds = 10 // Número de veces que se aplica el algoritmo de hashing
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    // Crear el nuevo usuario con la contraseña encriptada
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role
    })

    // Eliminar la contraseña en la respuesta por seguridad
    newUser.password = undefined

    return res.status(201).json({ message: 'User registered', user: newUser })
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message })
  }
}

// Iniciar sesión
const login = async (req, res) => {
  const { email, password } = req.body

  // Validaciones básicas
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' })
  }

  try {
    // Buscar al usuario en la base de datos por email
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ message: 'Email or password is incorrect' })
    }

    // Comparar la contraseña ingresada con la guardada en la base de datos
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Email or password is incorrect' })
    }

    // Crear el payload para el token JWT
    const payload = {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      iat: Math.floor(Date.now() / 1000), // Fecha de emisión
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7) // Expiración en 7 días
    }

    // Generar el token usando jwt-simple
    const token = jwt.encode(payload, process.env.SECRET_KEY)

    // Responder con el token
    return res.status(200).json({ message: 'User logged in', token })
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error: error.message })
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

export { register, login, getAllUsers, getUserById, updateUser, deleteUserById }
