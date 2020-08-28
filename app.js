require('./config/env.js');
require('dotenv').config();

const express = require('express');
const json = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models');
const app = express();
const path = require('path');

//ver peticiones por consola
app.use(morgan('dev'));
app.use(json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(cors());
app.options('*', cors());

//Routes
app.use(require('./routes/index'));

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Conectado a base de datos');
    app.listen(process.env.PORT, () => {
      console.log('Escuchando el puerto:', process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;
