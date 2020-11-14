const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/employee.controller');

router.get('/employees', EmployeeController.getAll);

router.get('/employees/random', EmployeeController.getRandom);

router.get('/employees/:id', EmployeeController.getById);

router.post('/employees', EmployeeController.setEmployee);

router.put('/employees/:id', EmployeeController.updateEmployee);

router.delete('/employees/:id', EmployeeController.deleteEmployee);

module.exports = router;
