const { Router } = require('express')
const multer = require('multer')

const uploadConfig = require('../configs/upload')
const ensureAuthenticated = require('../middleware/ensureAuthenticated')

const UsersController = require('../controller/UsersController')
const UserAvatarController = require('../controller/UserAvatarController')

const usersRoutes = Router()

const userController = new UsersController()
const userAvatarController = new UserAvatarController()

const upload = multer(uploadConfig.MULTER)

usersRoutes.post('/', userController.create)
usersRoutes.put('/:id', ensureAuthenticated, userController.update)
usersRoutes.patch(
  '/avatar',
  upload.single('avatar'),
  userAvatarController.update
)

module.exports = usersRoutes
