const { findAllPacientes, findPaciente, registerPaciente, modifyPaciente, removePaciente} = require('../service/pacientes.js');
 
// Operación que devuelve todos los pacientes de la base de datos
const getPacientes = (async (req, res) => {
    const data = await findAllPacientes();
 
    res.status(200).json(data);
});
 
// Operación que devuelve un paciente determinado
const getPaciente = (async (req, res) => { 
    const data = await findPaciente(req.params.dni);
 
    res.status(200).json(data);
});
 
// Operación que registra un nuevo paciente en la base de datos
const postPaciente = (async (req, res) => {
    await registerPaciente(req.body.nombre, req.body.apellido, req.body.nacimiento, req.body.telefono, req.body.email, req.body.dni, req.body.usuario, req.body.password);
 
    res.status(201).json({});
});
 
// Operación que modifica un paciente en la base de datos
const putPaciente = (async (req, res) => {
    await modifyPaciente(req.params.nombre, req.body.apellido, req.body.nacimiento, req.body.telefono, req.body.email, req.body.usuario, req.body.password);
 
    res.status(204).json({});
});
 
// Operación que elimina un paciente de la base de datos
const deletePaciente = (async (req, res) => {
    await removePaciente(req.params.dni);
 
    res.status(204).json({})
});
 
module.exports = {
    getPacientes,
    getPaciente,
    postPaciente,
    putPaciente,
    deletePaciente,
};