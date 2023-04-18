const knex = require('../database/knex')
const AppError = require('../utils/appError')
const { compare } = require('bcryptjs')
const authConfig = require('../configs/auth')
const { sign } = require('jsonwebtoken')

class SessionsController {
  async create(request, response) {
    const { email, password } = request.body
    const user = await knex('users').where({ email: email }).first()

    if (!user) {
      throw new AppError('E-mail e/ou senha incorreta', 401)
    }

    const passwordMatched = await compare(password, user.password)

    if (!passwordMatched) {
      throw new AppError('E-mail e/ou senha incorreta', 401)
    }
    const { secret, expiresIn } = authConfig.jwt

    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn
    })

    return response.json({ user, token })

    // return response.json({ email: email, password: password })
  }
}

module.exports = SessionsController
