
var email = document.getElementById('exampleInputEmail1');
var contraseña = document.getElementById('exampleInputPassword1');

function enviarForm() {
    var msjerror = [];

    // Validación del Correo Electrónico
    if (email.value.trim() === '') {
        msjerror.push('Ingrese un Correo Electrónico');
        document.getElementById('email_error').innerHTML = 'Ingrese un Correo Electrónico';
    } else {
        document.getElementById('email_error').innerHTML = '';
    }

    if (contraseña.value.trim() === '') {
        msjerror.push('Ingrese una Contraseña');
        document.getElementById('password_error').innerHTML = 'Ingrese una Contraseña';
    } else {
        document.getElementById('password_error').innerHTML = '';
    }

    if (msjerror.length > 0) {
        return false;
    } else {
        return true;
    }
}
