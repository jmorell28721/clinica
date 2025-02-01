<script>
const API_URL = 'http://localhost:8080/usuarioLogin';
function login() {
    const credenciales = {
        username: 'usuario',
        email: 'correo',
        pass: 'contraseña'
    };

    fetch('http://localhost:/8080/usuarioLogin'), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credenciales)
    }

    .then(Response => response.json())
    .then(data => {
        if (data.token) {
            localStorage.setItem('authToken');
            alert('Inicio de sesión correcto');
        }

        else {
            alert('Inicio de sesión fallido')
        }
    })

    .catch(error => {
        console.error('Error:', error);
        alert('Error al iniciar sesión')
    });
}

function solicitarcita() {
    const token = localStorage.getItem('authToken');

    if (!token) {
        document.getElementById(mensaje).textContent = "Por favor, inicia sesión para pedir cita";
        return;
    }

    fetch(API_URL, {
        method: 'GET',
        headers: {
            'Auth': token
        }
    })

    .then(response => response.json())
    .then(data => {
        if (data.mensaje === 'Usuario logueado')  {
            document.getElementById('mensaje').textContent = "Cita solicitada con éxito";
        }

        else {
            document.getElementById('mensaje').textContent = "Inicia sesión para solicitar cita";
        }
    })
    .catch(error => {
        document.getElementById("mensaje").textContent = "Error al verificar el estado de la sesión";
        console.error('Error:', error);
    })
}

document.getElementById("submit").addEventListener("click", solicitarcita);
document.getElementById("loginbt").addEventListener("click", login);

</script>