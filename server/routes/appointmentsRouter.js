const Router = require("express");
const router = new Router();
const appointmentController = require("../controllers/appointmentController");

router.post("/create", appointmentController.create);
router.get("/getAll", appointmentController.getAll);
router.get("/getById/:id", appointmentController.getOne);
router.put("/updateById/:id", appointmentController.updateById);
router.delete("/deleteById/:id", appointmentController.deleteById);
router.get('/fetchPending', appointmentController.fetchPendingAppointments)

module.exports = router;
