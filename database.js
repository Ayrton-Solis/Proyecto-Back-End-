const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://AyrtonSolis:43457914>@cluster0.0qiseoo.mongodb.net/?retryWrites=true&w=majority'

// Conexion a mongoDB
mongoose.connect(connectionString)
  .then(() => {
    console.log('database conected');
  }).catch(err => {
    console.error(err)

  })