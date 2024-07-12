var email2 = document.getElementById('exampleInputEmail1')
var contraseña2 = document.getElementById('contraseña2')
var error = document.getElementById('error2')

error.style.color = 'red';

function enviarForm2(){
    var msjerror = [];
    if(email2.value==null || email2.value==''){
        msjerror.push('Ingrese su correo')
    }
    if(contraseña2.value==null || contraseña2.value==''){
        msjerror.push('Ingrese la contraseña')
    }

    error.innerHTML = msjerror.join(', ')

    return false;
}