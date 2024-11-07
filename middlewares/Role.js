const isAdmin = (req, res, next) => {
  if (req.role !== 'ADMIN') {
    return res.status(403).json({ message: 'Forbidden' })
  }
  next()
}

const IsEmployee = (req, res, next) => {
  if (req.role !== 'EMPLOYEE') {
    return res.status(403).json({ message: 'Forbidden' })
  }
  next()
}

const isCostumer = (req, res, next) => {
  if (req.role !== 'COSTUMER') {
    return res.status(403).json({ message: 'Forbidden' })
  }
  next()
}

export { isAdmin, IsEmployee, isCostumer }
