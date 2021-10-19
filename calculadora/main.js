function sumatoria(){
    var num1 = document.getElementById("input_sumatoria").value;
    var res=0;   
    for (var i = 1; i <= num1; i++) {
        res = res + i;
    }
    document.getElementById("res_sumatoria").innerText ="El resultado es: " +res;
}
var boton= document.getElementById("btn_sumatoria");
boton.addEventListener("click",function(){
    sumatoria();
})
//Mayusculas y minusculas//
function mayuscula() {
    var usuario=document.getElementById("conver").value;
    var userUper = usuario.toUpperCase();
    document.getElementById("resultado_mayuscula").innerHTML="La palabra en mayuscula es: "+userUper;
}
var boton_ma=document.getElementById("convertir");
boton_ma.addEventListener("click", function(){
    mayuscula();
})

function minuscula() {
    var usuario=document.getElementById("conver").value;
    var userlower = usuario.toLowerCase();
    document.getElementById("resultado_minuscula").innerHTML="La palabra en minuscula es: "+userlower;
}
var boton_ma=document.getElementById("convertir");
boton_ma.addEventListener("click", function(){
    minuscula();
})
///Calculadora///

function suma(){
    var num1=document.getElementById("numb1").value;
    var num2=document.getElementById("numb2").value;
    var resultado=parseInt(num1)+parseInt(num2);
    console.log(resultado);
    document.getElementById("resultado_cal").innerHTML="la suma es: "+resultado;
    
}

function resta(a,b){
    var num1=document.getElementById("numb1").value;
var num2=document.getElementById("numb2").value;
    var resultado= num1-num2;
    return resultado;
}
function multi(a,b){
    var resultado= parseInt(a) * parseInt(b);
    return resultado;
}

function divi(a,b){
    if (num2 == 0) {
            var resultado= alert("No se puede dividir entre 0");
            return resultado;
          } else {
            var resultado= parseInt(num1) / parseInt(num2);
            // alert("La division es: " + resultado);
            return resultado;
          }
    
}

var boton_suma=document.getElementById("btn_suma");
boton_suma.addEventListener("click", function(){
    suma();
})