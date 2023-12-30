const Router = require('express')
const router = new Router()
const paymentController = require("../controllers/paymentTransactionsController")

router.post('/', paymentController.create)

module.exports = router