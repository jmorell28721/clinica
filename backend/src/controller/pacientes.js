const { findAllPacientes, findPaciente, registerPaciente, modifyPaciente, removePaciente} = require('../service/pacientes.js');
 
// Operación que devuelve todas las ciudades de la base de datos
const getPacientes = (async (req, res) => {
    const data = await findAllPacientes();
 
    res.status(200).json(data);
});
 
// Operación que devuelve una ciudad determinada
const getPaciente = (async (req, res) => {
    const data = await findPaciente(req.params.city);
 
    res.status(200).json(data);
});
 
// Operación que registra una nueva ciudad en la base de datos
const postPaciente = (async (req, res) => {
    await registerPaciente(req.body.name, req.body.population, req.body.altitude);
 
    res.status(201).json({});
});
 
// Operación que modifica una ciudad en la base de datos
const putPaciente = (async (req, res) => {
    await modifyPaciente(req.params.city, req.body.population, req.body.altitude);
 
    res.status(204).json({});
});
 
// Operación que elimina una ciudad de la base de datos
const deletePaciente = (async (req, res) => {
    await removePaciente(req.params.city);
 
    res.status(204).json({})
});
 
module.exports = {
    getPacientes,
    getPaciente,
    postPaciente,
    putPaciente,
    deletePaciente,
};