const {Router} = require('express')
const router = Router(); 

const employeesCtr= require('../controllers/employees.controller.js')

router.get('/', employeesCtr.getEmployees)
router.post('/', employeesCtr.createEmployee)
router.get('/:id', employeesCtr.getEmployee)
router.put('/:id', employeesCtr.editEmploye)
router.delete('/:id', employeesCtr.deleteEmployee)





module.exports = router;