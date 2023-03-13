const { hash } = require('bcryptjs')
const sqliteConnection = require('../database/sqlite')
const AppError = require('../utils/AppError')

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body

    const database = await sqliteConnection()
    const checkUserExist = await database.get(
      'SELECT * FROM user WHERE email = (?)',
      [email]
    )

    if (checkUserExist) {
      throw new AppError('Este email já foi registrado')
    }

    const hashedPassoword = await hash(password, 8)

    await database.run(
      'INSERT INTO users (name, email, password) VALUES (?,?,?)',
      [name, email, hashedPassoword]
    )

    return response.status(201).json()
  }
}

module.exports = UsersController
