const express = require('express');
const employeeRoutes = require('./routes/employeeRoutes');
require('./config/db')
const app = express();

app.use(express.json()); 

// Use the employee routes
app.use('/api', employeeRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
const Employee = require('./models/Employee'); 

// Create a new employee document
const newEmployee = new Employee({
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '1234567890',
  designation: 'Software Engineer',
  salary: 75000
});

// Save the document to the database
newEmployee.save()
  .then(() => console.log('Employee created successfully'))
  .catch(err => console.log('Error creating employee:', err));

