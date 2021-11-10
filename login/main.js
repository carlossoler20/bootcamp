$(document).ready(function () {
    var correo = ["carlossoler17@gmail.com", "carlos.solers@cun.edu.co"];
    var password = [123456, 654321];
    var email;
    var pass;
    

    function validarCorreo() {
        email = $("#exampleInputEmail1").val();
        if ((email == correo[0]) || (email == correo[1])) {
            alert("Es verdadero")
            return true;
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
            return true;
        }
        else {
            alert("Es falso")
            return false;
        }
    }

    function valido(){
        if((validarCorreo==true) && (validarPass=true)){
            alert("Bienvenido")
        }
        else{
            alert("Correo o Contraseña incorrecta")
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