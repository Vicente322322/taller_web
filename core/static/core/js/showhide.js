$(document).ready(function() {
    // Ocultar todos los botones "Mostrar menos" al iniciar la página
    $(".btn-rojo.hide").hide();

    // Mostrar más y mostrar menos para cada sección
    $("#show1").click(function() {
        $("#p1").collapse('show');
        $(this).hide(); // Ocultar el botón "Mostrar más"
        $("#hide1").show(); // Mostrar el botón "Mostrar menos"
    });

    $("#hide1").click(function() {
        $("#p1").collapse('hide');
        $(this).hide(); // Ocultar el botón "Mostrar menos"
        $("#show1").show(); // Mostrar el botón "Mostrar más"
    });

    $("#show2").click(function() {
        $("#p2").collapse('show');
        $(this).hide();
        $("#hide2").show();
    });

    $("#hide2").click(function() {
        $("#p2").collapse('hide');
        $(this).hide();
        $("#show2").show();
    });

    $("#show3").click(function() {
        $("#p3").collapse('show');
        $(this).hide();
        $("#hide3").show();
    });

    $("#hide3").click(function() {
        $("#p3").collapse('hide');
        $(this).hide();
        $("#show3").show();
    });

    $("#show4").click(function() {
        $("#p4").collapse('show');
        $(this).hide();
        $("#hide4").show();
    });

    $("#hide4").click(function() {
        $("#p4").collapse('hide');
        $(this).hide();
        $("#show4").show();
    });

    $("#show5").click(function() {
        $("#p5").collapse('show');
        $(this).hide();
        $("#hide5").show();
    });

    $("#hide5").click(function() {
        $("#p5").collapse('hide');
        $(this).hide();
        $("#show5").show();
    });

    $("#show6").click(function() {
        $("#p6").collapse('show');
        $(this).hide();
        $("#hide6").show();
    });

    $("#hide6").click(function() {
        $("#p6").collapse('hide');
        $(this).hide();
        $("#show6").show();
    });
});
