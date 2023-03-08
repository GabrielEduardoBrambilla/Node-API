class UsersController {
  create(request, response) {
    const { name, email, password } = request.body

    response.send(`Name: ${name}, Email: ${email}`)
  }
}

module.exports = UsersController
