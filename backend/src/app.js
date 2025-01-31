const express = require('express');

const cities = require('./route/pacientes.js');
 
const app = express();
app.use(express.json());
 
const pacientes = [
    {
        'nombre': 'Slilma',
        'apellido': 'Delvie',
        'fechaNac': '10/10/1996'
    }    
];
 
app.get('/pacientes', (req, res) => {
    res.json(pacientes);
});
 

 
app.listen(8080, () => {
    console.log('Iniciando el backend en puerto 8080');
});