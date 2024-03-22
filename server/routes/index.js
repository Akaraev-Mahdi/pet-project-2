const Router = require('express')
const router = new Router()
const deviceRouter = require('./deviceR')
const userRouter = require('./userR')
const brandRouter = require('./brandR')
const typeRouter = require('./typeR')
const basketRouter = require('./basketR')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)
router.use('/basket', basketRouter)

module.exports = router