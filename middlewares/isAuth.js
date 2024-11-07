import jwt from 'jwt-simple'

const isAuth = (req, res, next) => {
  // Obtener el encabezado Authorization
  const authHeader = req.headers.authorization

  // Verificar si el encabezado Authorization existe
  if (!authHeader) {
    return res.status(401).json({ message: 'Missing Authorization header' })
  }

  // Separar el encabezado Authorization por medio de un arreglo, separandolo por el espacio en blanco.
  const [bearer, token] = authHeader.split(' ')

  // Verificar que el encabezado de authorization comience con 'Bearer'
  if (bearer !== 'Bearer') {
    return res.status(401).json({ message: 'Invalid Authorization header' })
  }

  // Verificar que el token no esté vacío
  if (!token) {
    return res.status(401).json({ message: 'Missing token' })
  }

  try {
    // Validar que el token sea valido y no esté manipulado
    const payload = jwt.decode(token, process.env.SECRET_KEY)

    // Verificar si el token ha expirado
    const now = Math.floor(Date.now() / 1000) // Fecha actual en segundos
    if (payload.exp <= now) {
      return res.status(401).json({ message: 'Token expired' })
    }

    // Adjuntar los datos del usuario al objeto req (puedes agregar más datos si es necesario)
    req.user = payload

    // Si todo es válido, pasamos al siguiente middleware o controlador
    next()
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' })
  }
}

export { isAuth }
