    function enviarForm() {
        // Obtener los valores de los campos
        var rut = document.getElementById('idrut').value.trim();
        var nombre = document.getElementById('idnom').value.trim();
        var apellido = document.getElementById('idapl').value.trim();
        var email = document.getElementById('exampleInputEmail1').value.trim();
        var direccion = document.getElementById('iddir').value.trim();
        var imagen = document.getElementById('idimg').value.trim();
        var suscripcion = document.querySelector('input[name="inlineRadioOptions"]:checked');
        var contraseña = document.getElementById('idcont').value.trim();
        var repContraseña = document.getElementById('idrepcont').value.trim();

        // Variables para controlar errores
        var error = false;
        var mensajeError = "";

        // Validar Rut (puedes implementar una validación más específica según tu país)
        if (rut === "") {
            document.getElementById('rut_error').innerText = "Debe ingresar un Rut";
            error = true;
        } else {
            document.getElementById('rut_error').innerText = "";
        }

        // Validar Nombres
        if (nombre === "") {
            document.getElementById('nombre_error').innerText = "Debe ingresar un Nombre";
            error = true;
        } else {
            document.getElementById('nombre_error').innerText = "";
        }

        // Validar Apellidos
        if (apellido === "") {
            document.getElementById('apellido_error').innerText = "Debe ingresar un Apellido";
            error = true;
        } else {
            document.getElementById('apellido_error').innerText = "";
        }

        // Validar Correo Electrónico
        if (email === "") {
            document.getElementById('email_error').innerText = "Debe ingresar un Correo Electrónico";
            error = true;
        } else {
            // Puedes validar el formato del correo electrónico aquí si es necesario
            document.getElementById('email_error').innerText = "";
        }

        // Validar Dirección
        if (direccion === "") {
            document.getElementById('direccion_error').innerText = "Debe ingresar una Dirección";
            error = true;
        } else {
            document.getElementById('direccion_error').innerText = "";
        }

        // Validar Imagen de perfil
        if (imagen === "") {
            document.getElementById('imagen_error').innerText = "Debe seleccionar una Imagen de perfil";
            error = true;
        } else {
            document.getElementById('imagen_error').innerText = "";
        }

        // Validar Suscripción
        if (!suscripcion) {
            document.getElementById('suscripcion_error').innerText = "Debe seleccionar una opción de Suscripción";
            error = true;
        } else {
            document.getElementById('suscripcion_error').innerText = "";
        }

        // Validar Contraseña y Repetir Contraseña
        if (contraseña === "") {
            document.getElementById('contraseña_error').innerText = "Debe ingresar una Contraseña";
            error = true;
        } else {
            document.getElementById('contraseña_error').innerText = "";
        }

        if (repContraseña === "") {
            document.getElementById('rcontraseña_error').innerText = "Debe repetir la Contraseña";
            error = true;
        } else {
            document.getElementById('rcontraseña_error').innerText = "";
        }

        if (contraseña !== repContraseña) {
            document.getElementById('rcontraseña_error').innerText = "Las contraseñas no coinciden";
            error = true;
        }

        // Devolver false si hay algún error para evitar el envío del formulario
        if (error) {
            return false;
        }

        // Si no hay errores, el formulario se enviará
        return true;
    }
