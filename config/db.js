const mongoose = require('mongoose');

const dbURI = 'mongodb://127.0.0.1:27017/Employees';
mongoose.connect(dbURI, { useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));
