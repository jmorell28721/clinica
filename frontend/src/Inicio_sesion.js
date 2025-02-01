import axios from 'axios';

window.readPacientes = function() {
    axios.get('http://localhost:8080/usuarioLogin')
        .then((response) => {
            const pacienteList = response.data;
 
            Object.keys(pacienteList).forEach(pacienteName => {
                addPacienteNode(pacienteName);
            });
        });
};