// ====================================================
//      Rutas API
// ====================================================

const express = require('express');
const app = express();

//archivo de rutas de modelo task
app.use('/task', require('./task'));

module.exports = app;