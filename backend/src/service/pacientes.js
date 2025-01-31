const db = require('../configuration/database.js').db;
 
// Operación que devuelve todas las ciudades de la base de datos
const findAllPacientes = (async () => {
    const result = await db('pacientes').select('*');
    return result;
});
 
// Operación que devuelve una ciudad determinada
const findPaciente = (async (cityName) => {
    const result = await db('clinica').select('*').where({name: cityName}).first();
    return result;
});
 
// Operación que registra una nueva ciudad en la base de datos
const registerPaciente = (async (cityName, cityPopulation, cityAltitude) => {
    const result = await db('clinica').insert({
        name: cityName,
        population: cityPopulation,
        altitude: cityAltitude
    });
 
    return result;
});
 
// Operación que modifica una ciudad en la base de datos
const modifyPaciente = (async (cityName, cityPopulation, cityAltitude) => {
    const result = await db('clinica').where({ name: cityName }).update({
        population: cityPopulation,
        altitude: cityAltitude
    });
 
    return result;
});
 
// Operación que elimina una ciudad de la base de datos
const removePaciente = (async (cityName) => {
    const result = await db('clinica').del().where({name: cityName});
 
    return result;
});
 
module.exports = {
    findAllPacientes,
    findPaciente,
    registerPaciente,
    modifyPaciente,
    removePaciente,
};