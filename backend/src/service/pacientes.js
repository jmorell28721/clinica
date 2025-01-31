const db = require('../configuration/database.js').db;
 
// Operación que devuelve todos los paciente de la base de datos
const findAllPacientes = (async () => {
    const result = await db('paciente').select('*');
    return result;
});
 
// Operación que devuelve una paciente determinado
const findPaciente = (async (dniPaciente) => {
    const result = await db('paciente').select('*').where({dni: dniPaciente}).first();
    return result;
});
 
// Operación que registra una nueva ciudad en la base de datos
const registerPaciente = (async (nombrePac, apellidoPac, nacimientoPac, telefonoPac, emailPac, dniPac, usuarioPac, passwordPac) => {
    const result = await db('paciente').insert({
        nombre: nombrePac,
        apellido: apellidoPac,
        nacimiento: nacimientoPac,
        telefono: telefonoPac,
        email:emailPac,
        dni: dniPac,
        usuario: usuarioPac,
        password: passwordPac
    }); 
    return result;
});
 
// Operación que modifica un paciente en la base de datos
const modifyPaciente = (async (nombrePac, apellidoPac, nacimientoPac, telefonoPac, emailPac, dniPac, usuarioPac, passwordPac) => {
    const result = await db('paciente').where({ dni: dniPac }).update({
        nombre: nombrePac,
        apellido: apellidoPac,
        nacimiento: nacimientoPac,
        telefono: telefonoPac,
        email:emailPac,
        usuario: usuarioPac,
        password: passwordPac
    }); 
    return result;
});
 
// Operación que elimina una ciudad de la base de datos
const removePaciente = (async (dniPac) => {
    const result = await db('paciente').del().where({dni: dniPac}); 
    return result;
});
 
module.exports = {
    findAllPacientes,
    findPaciente,
    registerPaciente,
    modifyPaciente,
    removePaciente,
};