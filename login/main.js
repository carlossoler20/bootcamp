$(document).ready(function () {
    var correo = ["carlossoler17@gmail.com", "carlos.solers@cun.edu.co"];
    var password = [123456, 654321];
    var email;
    var pass;
    var a;
    var b;

    function validarCorreo() {
        email = $("#exampleInputEmail1").val();
        if ((email == correo[0]) || (email == correo[1])) {
            alert("Es verdadero")
            a=true
            return a;
        }
        else {
            alert("Es falso")
            return false;
        }
    }
    
    function validarPass() {
        pass = $("#exampleInputPassword1").val();
        if ((pass == password[0]) || (pass == password[1])) {
            alert("Es verdadero")
            b=true;
            return b;
        }
        else {
            alert("Es falso")
            return false;
        }
    }
        function valido(){
        if(a==true && b==true){
            alert("Bienvenido")
            return;
        }
        else{
            alert("Correo o Contraseña incorrecta")
            return;
        }
    }
    $("#btn-inicio").click(function () {
        validarCorreo();
        validarPass();
        valido();
    })


    // if((==correo[0]||==correo[1])(==pass[0]||==pass[1])){
    //     Bienvenido
    // }
    // else{
    //     Clave incorrecta
    // }

})