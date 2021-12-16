var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();


//Configuraciones
app.set('views', path.join(__dirname, 'views')); // las vistas o los html van a estar en la carpeta views
app.set('view engine', 'ejs');//le decimos a express que el gestor de plantillas va a ser ejs
app.use(bodyParser.urlencoded({ extended: true })); // peticiones con url muy larga

app.use(express.static(__dirname + '/views/estilos')); //donde van a estar lo archivos estáticos



var port = 3000;

// metodos http: GET, POST, PUT, DELETE, OPTIONS

app.get('/modifica-cliente', function(request, response) {
    response.send('hola mundo en node para navegador');
});

app.get('/crear-cliente', function(request, response) {
    response.send('hola tu!: ' + request.query.nombre + "-" + request.query.apellido);
});

app.get('/saludo-ejs', function(request, response) {
    response.render(
        'index',
        {
            nombre: request.query.nombre
        }
    );
});

app.post('/recibir-formulario', function(request, response) {
    console.log('formulario del cliente', request.body.nombre);
    // response.send('el formulario envió: ' + request.body.nombre);

    response.render(
        'respuesta',
        {
            loQueEscribioElUsuario: request.body.nombre
        }
    );
});

app.listen(port, function() {
    console.log('ya empezó a funcionar');
});
