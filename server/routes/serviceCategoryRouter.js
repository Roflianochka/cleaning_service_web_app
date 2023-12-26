const Router = require("express");
const router = new Router();
const serviceCategoryController = require("../controllers/serviceCategoryController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/create", checkRole("ADMIN"), serviceCategoryController.create);
router.get("/getAll", serviceCategoryController.getAll);
router.get("/getById/:id", serviceCategoryController.getById);
router.put("/updateById/:id", serviceCategoryController.updateById);
router.delete("/deleteById/:id", serviceCategoryController.deleteById);

module.exports = router;
