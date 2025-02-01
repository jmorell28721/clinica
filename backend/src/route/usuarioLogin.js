const express = require('express');
const router = express.Router();
 
const { getUsuarioLogin, postUsuarioLogin, putUsuarioLogin, deleteUsuarioLogin } = require('../controller/usuarioLogin.js');
 

router.get('/UsuariosLogin/:usuarioLogin', getUsuarioLogin);
router.post('/UsuariosLogin', postUsuarioLogin);
router.put('/UsuariosLogin/:usuarioLogin', putUsuarioLogin);
router.delete('/UsuariosLogin/:usuarioLogin', deleteUsuarioLogin);
 
module.exports = router;