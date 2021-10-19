//Mayusculas y minusculas//

function mayuscula() {
    var usuario = document.getElementById("conver").value;
    var userUper = usuario.toUpperCase();
    document.getElementById("resultado_mayuscula").innerHTML = "La palabra en mayuscula es: " + userUper;
}
var boton_ma = document.getElementById("convertir");
boton_ma.addEventListener("click", function () {
    mayuscula();
})

function minuscula() {
    var usuario = document.getElementById("conver").value;
    var userlower = usuario.toLowerCase();
    document.getElementById("resultado_minuscula").innerHTML = "La palabra en minuscula es: " + userlower;
}
var boton_ma = document.getElementById("convertir");
boton_ma.addEventListener("click", function () {
    minuscula();
})
///Contar Caracteres///
function caracteres (){
var palabra=document.getElementById("input_caracteres").value;
var caracteres= palabra.length;
document.getElementById("resultado_carac").innerHTML = "La cantidad de caracteres es: " + caracteres;
}

var boton_caracteres = document.getElementById("btn_caracteres");
boton_caracteres.addEventListener("click", function () {
    caracteres();
})
///Calculadora///

function suma() {
    var num1 = document.getElementById("numb1").value;
    var num2 = document.getElementById("numb2").value;
    var resultado = parseInt(num1) + parseInt(num2);
    console.log(resultado);
    document.getElementById("resultado_cal").innerHTML = "la suma es: " + resultado;

}

function resta(a, b) {
    var num1 = document.getElementById("numb1").value;
    var num2 = document.getElementById("numb2").value;
    var resultado = parseInt(num1) - parseInt(num2);
    document.getElementById("resultado_cal").innerHTML = "la resta es: " + resultado;
}
function multi(a, b) {
    var num1 = document.getElementById("numb1").value;
    var num2 = document.getElementById("numb2").value;
    var resultado = parseInt(num1) * parseInt(num2);
    document.getElementById("resultado_cal").innerHTML = "la multiplicacion es: " + resultado;
}

function divi(a, b) {
    var num1 = document.getElementById("numb1").value;
    var num2 = document.getElementById("numb2").value;
    if (num2 == 0) {
        document.getElementById("resultado_cal").innerHTML = "No se puede dividir sobre 0";
    }
    else {
        var resultado = parseInt(num1) / parseInt(num2);
        document.getElementById("resultado_cal").innerHTML = "El resultado de la division es: " + resultado;
    }

}

var boton_suma = document.getElementById("btn_suma");
boton_suma.addEventListener("click", function () {
    suma();
})
var boton_resta = document.getElementById("btn_resta");
boton_resta.addEventListener("click", function () {
    resta();
})
var boton_multiplicacion = document.getElementById("btn_multiplicacion");
boton_multiplicacion.addEventListener("click", function () {
    multi();
})
var boton_division = document.getElementById("btn_division");
boton_division.addEventListener("click", function () {
    divi();
})
///Sumatoria///
function sumatoria() {
    var num1 = document.getElementById("input_sumatoria").value;
    var res = 0;
    for (var i = 1; i <= num1; i++) {
        res = res + i;
    }
    document.getElementById("res_sumatoria").innerText = "El resultado es: " + res;
}
var boton = document.getElementById("btn_sumatoria");
boton.addEventListener("click", function () {
    sumatoria();
})