const knex = require('knex');
 
// Configuración de la base de datos: tipo, ubicación y otros parámetros
const db = knex({
    client: 'sqlite3',
    connection: {
        filename: 'pacientes.db',
        filename: 'usuariosLogin.db'
    },
    useNullAsDefault: true
});
 
exports.db = db;