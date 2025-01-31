const express = require('express');
const router = express.Router();
 
const { getPacientes, getPaciente, postPaciente, putPaciente, deletePaciente } = require('../controller/pacientes.js');
 
router.get('/pacientes', getPacientes);
router.get('/pacientes/:paciente', getPaciente);
router.post('/pacientes', postPaciente);
router.put('/pacientes/:paciente', putPaciente);
router.delete('/pacientes/:paciente', deletePaciente);
 
module.exports = router;