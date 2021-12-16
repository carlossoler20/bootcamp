console.log("Estoy en el CSS");

var boton = $('#ModTodo');
var boton1 = $('#ModEst');
boton.on('click', function () {
    $("input[type=text]").show();
    $("input[type=text]").prop('disabled', false);
    $("#estado").show();
    $("#guardar").show();

})

boton1.on('click', function () {
    $("input[type=text]").hide();
    $("input[type=text]").prop('disabled', true);
    $("#estado").show();
    $("#nombre").show();
    $("#apellido").show();
    $("#guardar").show();
})