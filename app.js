const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


const app = express();



app.set('port',process.env.PORT || 3500)

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/api/employees',require('./src/routes/employees.routes'))
app.use('/api/costumers',require('./src/routes/customers.routes'))
app.use('/api/users', require('./src/routes/auth.routes'))

module.exports = app;

