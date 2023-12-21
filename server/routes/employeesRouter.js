const Router = require('express')
const router = new Router()
const employeeControllerController = require("../controllers/employeeController")

router.post('/create',employeeControllerController.createEmployee)
router.get('/getAll', employeeControllerController.getAllEmployees)
router.get('/getById/:id', employeeControllerController.getEmployeeById)
router.put('/updateById/:id',employeeControllerController.updateEmployee)
router.delete('/deleteById/:id',employeeControllerController.deleteEmployee)


module.exports = router