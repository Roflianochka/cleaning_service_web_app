const Router = require("express");
const router = new Router();
const serviceReviewsController = require("../controllers/serviceReviewsController");

router.post("/create", serviceReviewsController.create);
router.get("/getAll", serviceReviewsController.getAll);
router.get("/getById/:id", serviceReviewsController.getOne);
router.put("/updateById/:id", serviceReviewsController.updateById);
router.delete("/deleteById/:id", serviceReviewsController.deleteById);

module.exports = router;
