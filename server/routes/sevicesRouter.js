const Router = require('express')
const router = new Router()
const serviceController = require("../controllers/serviceController")
router.post('/create',serviceController.create)
router.get('/getAll', serviceController.getAll)
router.post('/canReview/', serviceController.canReviewService)
router.get('/getById/:id',serviceController.getById)
router.get('/getReviews/:id', serviceController.getReviews);
router.put('/updateById/:id',serviceController.updateById)
router.delete('/deleteById/:id',serviceController.deleteById)

module.exports = router