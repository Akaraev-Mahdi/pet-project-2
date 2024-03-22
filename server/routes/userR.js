const Router = require('express')
const router = new Router()
const userController = require('../controller/userC')
const authMiddleware = require('../Mid/authMid')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.chek)

module.exports = router