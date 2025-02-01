const express = require('express');
const router = express.Router();
 
const { getUsuarioLogin, postUsuarioLogin, putUsuarioLogin, deleteUsuarioLogin } = require('../controller/usuariosLogin.js');
 

router.get('/usuariosLogin/:usuarioLogin', getUsuarioLogin);
router.post('/usuariosLogin', postUsuarioLogin);
router.put('/usuariosLogin/:usuarioLogin', putUsuarioLogin);
router.delete('/usuariosLogin/:usuarioLogin', deleteUsuarioLogin);
 
module.exports = router;