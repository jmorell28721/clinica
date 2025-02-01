const {findUsuarioLogin, registerUsuarioLog, modifyUsuarioLog, removeUsuarioLog} = require('../service/UsuarioLogin.js')

 
// Operación que devuelve un paciente determinado
const getUsuarioLogin = (async (req, res) => { 
    const data = await findUsuarioLogin(req.params.Id_UsuarioLogin);
 
    res.status(200).json(data);
});
 
// Operación que registra un nuevo paciente en la base de datos
const postUsuarioLogin = (async (req, res) => {
    await registerUsuarioLog(req.body.Id_UsuarioLogin, req.body.usuarioLogin, req.body.emailLogin, req.body.passwordLogin);
 
    res.status(201).json({});
});
 
// Operación que modifica un paciente en la base de datos
const putUsuarioLogin = (async (req, res) => {
    await modifyUsuarioLog(req.params.Id_UsuarioLogin, req.body.usuarioLogin, req.body.emailLogin, req.body.passwordLogin);
 
    res.status(204).json({});
});
 
// Operación que elimina un paciente de la base de datos
const deleteUsuarioLogin = (async (req, res) => {
    await removeUsuarioLog(req.params.Id_UsuarioLogin);
 
    res.status(204).json({})
});
 
module.exports = {
    getUsuarioLogin,
    postUsuarioLogin,
    putUsuarioLogin,
    deleteUsuarioLogin
};