$(document).ready(function () {
////Lo comentado era otra logica que estaba haciendo////
//     $("#btn-iniciar").click(function(){
//         var correo = ["carlossoler17@gmail.com", "carlos.solers@cun.edu.co"];
//         var password = [123456, 654321];
//         var email;
//         var pass;
//         $("#error").hide();
//         if((email != correo[0]) || (email != correo[1])) {
//                     $("#error").show();
//                     return true;
//                 }
//                 else {
//                     alert("HOla")
//                     return;
//                 }    

// })
$("#registro").hide();
$("#btn-crear").click(function(){
    $("#registro").show();
})
var correo = ["carlossoler17@gmail.com", "carlos.solers@cun.edu.co"];
var password = [123456, 654321];
var email;
var pass;
var a;
var b;
var msgBienvenido;
    function validarCorreo() {
        email = $("#exampleInputEmail1").val();
        if ((email == correo[0]) || (email == correo[1])) {
            a=true
            return a;
        }
        else {
            var x="Email Invalido";
            $("#resultadoNegativo").text(x);
            return;
        }
    }
    
    function validarPass() {
        pass = $("#exampleInputPassword1").val();
        if ((pass == password[0]) || (pass == password[1])) {
            b=true;
            return b;
        }
        else {
            var y="Contraseña invalido"
            $("#resultadoNegativo").text(y);
            return ;
        }
    }
        function valido(){
        if(a==true && b==true){
            var x="Bienvenido";
            $("#resultadoPositivo").text(x);
            return;
        }
        else{
            var y="Correo o contraseña invalido"
            $("#resultadoNegativo").text(y);
            return;
        }
    }
})