const AppError = require('../utils/AppError')

class UsersController {
  create(request, response) {
    const { name, email, password } = request.body

    if (!name) {
      throw new AppError('Nome é obrigatorio')
    }
    response.send(`Name: ${name}, Email: ${email}`)
  }
}

module.exports = UsersController
