const db = require('../configuration/database.js').db;
 
// Operación que devuelve todos los paciente de la base de datos
const findAllPacientes = (async () => {
    const result = await db('pacientes').select('*');
    return result;
});
 
// Operación que devuelve una paciente determinado
const findPaciente = (async (dniPaciente) => {
    const result = await db('pacientes').select('*').where({dni: dniPaciente}).first();
    return result;
});
 
// Operación que registra un nuevo paciente en la base de datos
const registerPaciente = (async (id_paciente,nombrePac, apellidoPac, nacimientoPac, telefonoPac, emailPac, dniPac, usuarioPac, passwordPac) => {
    const result = await db('pacientes').insert({
        id_paciente: id_paciente,
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
    const result = await db('pacientes').where({ dni: dniPac }).update({
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
 
// Operación que elimina un paciente de la base de datos
const removePaciente = (async (dniPac) => {
    const result = await db('pacientes').del().where({dni: dniPac}); 
    return result;
});
 
module.exports = {
    findAllPacientes,
    findPaciente,
    registerPaciente,
    modifyPaciente,
    removePaciente,
};