import axios from 'axios';
import { notifyError, notifyOk } from './dialogUtil.js';
import { el } from './documentUtil.js';

 
window.addPaciente = function() {
   const nombrePac = el('nombre').value;
   const apellidoPac = el('apellido').value;
   const nacimientoPac = el('nacimiento').value;
   const telefonoPac = el('telefono').value;
   const emailPac = el('email').value;
   const dniPac = el('dni').value;
   const usuarioPac = el('usuario').value;
   const passwordPac = el('pasword').value;


   // TODO Validación de datos
   if (nombre === '') {
    notifyError('El nombre es un campo obligatorio');
    return;
}

axios.post('http://localhost:8081/pacientes', {
    nombre: nombrePac,
    apellido: apellidoPac,
    nacimiento: nacimientoPac,
    telefono: telefonoPac,
    email:emailPac,
    dni: dniPac,
    usuario: usuarioPac,
    password: passwordPac
});

// TODO Confirmar al usuario que todo ha ido bien (o mal)
notifyOk('Paciente registrado');

// TODO Limpiar el formulario
el('nombre').value;
el('apellido').value;
el('nacimiento').value;
el('telefono').value;
el('email').value;
el('dni').value;
el('usuario').value;
el('pasword').value;
};
 

 
window.removepaciente = function(dni) {
    console.log(dni + ' was removed');
    // TODO Remove the city
};