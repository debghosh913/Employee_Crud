const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Get all employees
router.get('/employees', employeeController.getAllEmployees);

// Get a single employee by id
router.get('/employees/:id', employeeController.getEmployeeById);

// Create a new employee
router.post('/employees', employeeController.createEmployee);

// Update an existing employee
router.put('/employees/:id', employeeController.updateEmployee);

// Delete an employee
router.delete('/employees/:id', employeeController.deleteEmployee);

module.exports = router;
