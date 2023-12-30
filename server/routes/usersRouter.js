const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.get("/auth", authMiddleware, userController.check);
router.get("/userInfo/:id", authMiddleware, userController.getInfo);
router.get("/appointments/:userId", userController.getAllUserAppointments);
router.get("/appointments/cancel/:appointmentId", userController.cancelAppointment);


module.exports = router;
