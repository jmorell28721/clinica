function verificarLogin() {
    return usuarioEstaLogueado();
}
function pedirCita() {
    if (!verificarLogin()) {
        window.location.href = 'Pedir_cita.html';
        return;
    }
}
    console.log