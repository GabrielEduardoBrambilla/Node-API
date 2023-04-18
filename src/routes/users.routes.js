const { Router } = require('express')
const multer = require('multer')
const uploadConfig = require('../configs/upload')
const ensureAuthenticated = require('../middleware/ensureAuthenticated')
const UsersController = require('../controller/UsersController')
const UserAvatarController = require('../controller/UserAvatarController')

const usersRoutes = Router()
const upload = multer(uploadConfig.MULTER)

const userController = new UsersController()

const userAvatarController = new UserAvatarController()

usersRoutes.post('/', userController.create)
usersRoutes.put('/', ensureAuthenticated, userController.update)
usersRoutes.patch('/avatar', userAvatarController.update)

module.exports = usersRoutes
