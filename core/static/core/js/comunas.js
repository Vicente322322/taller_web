$(document).ready(function(){
    $('#lista-regiones').click(function(){
        $('#btn-obtener-dir').hide();
    });

    $('#lista-regiones').change(function(){
        if ($(this).val() !== '') {
            $('#btn-obtener-dir').hide();
        } else {
            $('#btn-obtener-dir').show();
        }
    });

    obtenerRegiones();
});

function obtenerRegiones() {
    $.get('https://api.shipit.cl/v/regions', function(data){
        $('#lista-regiones').empty();

        $.each(data, function(i, item){
            var opcion = $('<option></option>');
            opcion.val(item.id);
            opcion.text(item.name);
            $('#lista-regiones').append(opcion);
        });
    });
}

