const Router = require("express");
const router = new Router();
const appointmentRouter = require("./appointmentsRouter");
const employeesRouter = require("./employeesRouter");
const servicesRouter = require("./sevicesRouter");
const servicesReviewsRouter = require("./servicesReviewsRouter");
const usersRouter = require("./usersRouter");
const serviceCategoryRouter = require("./serviceCategoryRouter");
const serviceAssignmentsRouter = require("./serviceAssignmentsRouter")
const paymentsRouter = require("./paymentTransactionsRouter")

router.use("/user", usersRouter);
router.use("/employee", employeesRouter);
router.use("/appointment", appointmentRouter);
router.use("/service", servicesRouter);
router.use("/serviceReview", servicesReviewsRouter);
router.use("/serviceCategory", serviceCategoryRouter);
router.use("/serviceAssign", serviceAssignmentsRouter);
router.use("/payment", paymentsRouter);

module.exports = router;