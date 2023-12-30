const Router = require("express");
const router = new Router();
const serviceAssignmentController = require("../controllers/serviceAssignmentController");

router.post("/assign", serviceAssignmentController.assignEmployee);

module.exports = router;
