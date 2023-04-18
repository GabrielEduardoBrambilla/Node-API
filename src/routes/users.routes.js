const { Router } = require('express')

const UsersController = require('../controller/UsersController')
const ensureAuthenticated = require('../middleware/ensureAuthenticated')

const usersRoutes = Router()

const userController = new UsersController()

usersRoutes.post('/', userController.create)
usersRoutes.put('/:id', ensureAuthenticated, userController.update)

module.exports = usersRoutes
