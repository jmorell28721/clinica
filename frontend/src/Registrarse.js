import axios from 'axios';
import { notifyError, notifyOk } from './dialogUtil.js';


/**
 * Añade una ciudad a la lista
 * 
 * @param {string} name 
 */

function addPacienteNode(name) {
    const pacientesUl = document.getElementById('pacientes');

    // Crea y añade un nuevo elemento en la lista
    const item = document.createElement('li');
    item.className = 'list-group-item';
    item.appendChild(document.createTextNode(name));

    // Crea y añade el botón X para eliminar la ciudad
    const button = document.createElement('button');
    button.className = 'btn-close'
    button.onclick = function() {  
        addPaciente();      
        item.remove();
    };
    item.appendChild(button);

    pacientesUl.appendChild(item);
};
  
window.addPaciente = function() {
    const nombre = document.getElementById('nombre').value;;
    const apellido = document.getElementById('apellido').value;
    const nacimiento = document.getElementById('nacimiento').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const dni = document.getElementById('dni').value;
    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;

    // TODO Validación de datos
    if (usuario === '') {
        notifyError('El usuario es un campo obligatorio');
        return;
    }
    if (password === '') {
        notifyError('La contraseña es un campo obligatorio');
        return;
    }

    axios.post('http://localhost:8080/pacientes', {
        nombre: nombre,
        apellido: apellido,
        nacimiento: nacimiento,
        telefono: telefono,
        email:email,
        dni: dni,
        usuario: usuario,
        password: password
    }).then(()=>{
        addPacienteNode(nombre);
    });

    // TODO Confirmar al usuario que todo ha ido bien (o mal)
    notifyOk('Paciente registrado');

};
 
