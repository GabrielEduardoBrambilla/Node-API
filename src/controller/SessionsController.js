class SessionsController {
  async create(request, response) {
    const { email, password } = request.body

    return response.json({ email: email, password: password })
  }
}

module.exports = SessionsController
