const express = require('express');
const cors = require('cors');
const pacientes = require('./route/pacientes.js');
 
const app = express();
app.use(cors());
app.use(express.json());
 
app.use('/', pacientes);

 
app.listen(8080, () => {
    console.log('Iniciando el backend en puerto 8080');
});