const Router = require('express')
const router = new Router()
const appointmentRouter = require('./appointmentsRouter')
const employeesRouter = require('./employeesRouter')
const servicesRouter = require('./sevicesRouter')
const servicesReviewsRouter = require('./servicesReviewsRouter')
const usersRouter = require('./usersRouter')


router.use('/user',usersRouter)
router.use('/employee',employeesRouter)
router.use('/appointment',appointmentRouter)
router.use('/service',servicesRouter)
router.use('/serviceReview',servicesReviewsRouter)

module.exports = router