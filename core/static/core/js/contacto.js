    function enviarForm() {
        let valid = true;
        
        // Validar campo de nombres
        if ($('#idnom').val().trim() === '') {
            $('#nombre_error').text('El campo nombres es obligatorio.');
            valid = false;
        } else {
            $('#nombre_error').text('');
        }

        // Validar campo de apellidos
        if ($('#idapl').val().trim() === '') {
            $('#apellido_error').text('El campo apellidos es obligatorio.');
            valid = false;
        } else {
            $('#apellido_error').text('');
        }

        // Validar campo de correo electrónico
        if ($('#exampleInputEmail1').val().trim() === '') {
            $('#email_error').text('El campo correo electrónico es obligatorio.');
            valid = false;
        } else {
            $('#email_error').text('');
        }

        // Validar campo de dirección
        if ($('#iddir').val().trim() === '') {
            $('#direccion_error').text('El campo dirección es obligatorio.');
            valid = false;
        } else {
            $('#direccion_error').text('');
        }

        // Validar campo de detalles
        const detalles = $('#detalles').val().trim();
        if (detalles === '') {
            $('#detalles_error').text('El campo detalles es obligatorio.');
            valid = false;
        } else if (detalles.length > 200) {
            $('#detalles_error').text('El campo detalles no puede exceder los 200 caracteres.');
            valid = false;
        } else {
            $('#detalles_error').text('');
        }

        return valid;
    }
