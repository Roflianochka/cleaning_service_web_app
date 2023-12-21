const Router = require('express')
const router = new Router()
const serviceController = require("../controllers/serviceController")
router.post('/create',serviceController.create)
router.get('/getAll', serviceController.getAll)
router.get('/getById/:id',serviceController.getById)
router.put('/updateById/:id',serviceController.updateById)
router.delete('/deleteById/:id',serviceController.deleteById)

module.exports = router