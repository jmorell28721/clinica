const db = require('../configuration/database.js').db;


 
// Operación que devuelve un usuario determinado que esté registrado
const findUsuarioLogin = (async (Id_UsuarioLogin) => {
    const result = await db('usuarioLogin').select('*').where({id_usuario: Id_UsuarioLogin}).first();
    return result;
});
 
// Operación que registra un nuevo usuarioLog en la base de datos
const registerUsuarioLog = (async (id_UsuarioLogin, usuarioLog, emailLog, passwordLog) => {
    const result = await db('usuarioLogin').insert({
        id_usuario: id_UsuarioLogin,
        usuario: usuarioLog,
        email: emailLog,
        password: passwordLog        
    }); 
    return result;
});
 
// Operación que modifica un usuarioLog en la base de datos
const modifyUsuarioLog = (async (id_UsuarioLog, usuarioLog, emailLog, passwordLog) => {
    const result = await db('usuarioLogin').where({ Id_UsuarioLogin: id_UsuarioLog }).update({
        usuario: usuarioLog,
        email: emailLog,
        password: passwordLog
    }); 
    return result;
});
 
// Operación que elimina una ciudad de la base de datos
const removeUsuarioLog = (async (id_UsuarioLog) => {
    const result = await db('usuarioLogin').del().where({Id_UsuarioLogin: id_UsuarioLog }); 
    return result;
});
 
module.exports = {
    findUsuarioLogin,
    registerUsuarioLog,
    modifyUsuarioLog,
    removeUsuarioLog,
};