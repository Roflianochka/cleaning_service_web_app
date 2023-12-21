const Router = require('express')
const router = new Router()
const serviceCategoryController = require("../controllers/serviceCategoryController")

router.post('/create',serviceCategoryController.create)
router.get('/getAll', serviceCategoryController.getAll)
router.get('/getById/:id',serviceCategoryController.getById)
router.put('/updateById/:id',serviceCategoryController.updateById)
router.delete('/deleteById/:id',serviceCategoryController.deleteById)

module.exports = router