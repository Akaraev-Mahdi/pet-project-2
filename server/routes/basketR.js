const Router = require('express')
const router = new Router()
const deviceController = require('../controller/deviceC')

router.post('/', deviceController.addDevice)
router.get('/', deviceController.getDevice)
router.delete('/', deviceController.deleteDevice)

module.exports = router