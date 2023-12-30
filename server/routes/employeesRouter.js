const Router = require('express')
const router = new Router()
const employeeController = require("../controllers/employeeController")

router.post('/create', employeeController.createEmployee)
router.get('/getAll', employeeController.getAllEmployees)
router.get('/getAllAvailable', employeeController.getAllAvailableEmployees)
router.get('/getById/:id', employeeController.getEmployeeById)
router.put('/updateById/:id', employeeController.updateEmployee)
router.delete('/deleteById/:id', employeeController.deleteEmployee)

module.exports = router