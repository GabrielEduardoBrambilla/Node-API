// app.get('/message/:id', (request, response) => {
//   const { id } = request.params
//   response.send(`Fala macaco tamo jogando node ${id}`)
// })

// app.get('/user', (request, response) => {
//   const { page, id } = request.query

//   response.send(`Página: ${page}. id: ${id}`)
// })
const { Router } = require('express')
const UsersController = require('../controller/UsersController')
const usersRoutes = Router()
const userController = new UsersController()

usersRoutes.post('/user', userController.create)

module.exports = usersRoutes
