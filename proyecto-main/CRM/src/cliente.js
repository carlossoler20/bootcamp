var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cliente = express();
var mongoose = require("mongoose"); //Manejar BD en MongoDB
var Persona = require('./models/persona');//Modelo de la base de datos
const persona = require('./models/persona');


mongoose.connect("mongodb+srv://root:1234@cluster0.gsqtf.mongodb.net/CRM")
    .then(function (db) {
        console.log("Conectado a la Base de Datos");
    })
    .catch(function (err) {
        console.log(err);
    });

//Configuraciones
cliente.set('views', path.join(__dirname, 'views'));// las vistas o los html van a estar en la carpeta views
cliente.set('view engine', 'ejs');//le decimos a express que el gestor de plantillas va a ser ejs
cliente.use(bodyParser.urlencoded({ extended: true })); // peticiones con url muy larga

cliente.use(express.static(__dirname + '/views/estilos')); //donde van a estar lo archivos estáticos

cliente.get('/nuevoCliente', function (request, response) {
    response.render('crearCliente', {});
})
cliente.get('/inicio', function (request, response) {
    response.render('index', {});
})

cliente.get('/login', function (request, response) {
    response.render('login', {});
})
//Enrutado de la pagina de busqueda
cliente.get('/buscar', function (request, response) {
    response.render('buscar', {});
})


cliente.get('/modificaCliente/:id', async function (request, response) {
    console.log(request.params.id);
    var id = request.params.id;
    var personaEncontrada = await Persona.findById(id);
    console.log(personaEncontrada);
    response.render(
        'modificaCliente',
        {
            personaEncontrada: personaEncontrada
        }
    );
});

cliente.post(
    '/guardarNuevoCliente', async function (request, response) {
        console.log(request.body);
        var persona = new Persona(request.body);
        await persona.save();
        response.render(
            'crearCliente',
            {
                body: request.body
            }
        )
    }

)

cliente.post(
    '/guardarModCliente/:id', async function (request, response) {
        var id = request.params.id;
        var personaEncontrada = await Persona.findById(id);
        console.log(personaEncontrada);
        personaEncontrada.nombre = (request.body.nombre) ? request.body.nombre : personaEncontrada.nombre;
        personaEncontrada.apellido = (request.body.apellido) ? request.body.apellido : personaEncontrada.apellido;
        personaEncontrada.email = (request.body.email) ? request.body.email : personaEncontrada.email;
        personaEncontrada.tel = (request.body.tel) ? request.body.tel : personaEncontrada.tel;
        personaEncontrada.pais = (request.body.pais) ? request.body.pais : personaEncontrada.pais;
        personaEncontrada.ciudad = (request.body.ciudad) ? request.body.ciudad : personaEncontrada.ciudad;
        personaEncontrada.direccion = (request.body.direccion) ? request.body.direccion : personaEncontrada.direccion;
        personaEncontrada.instagram = (request.body.instagram) ? request.body.instagram : personaEncontrada.instagram;
        personaEncontrada.facebook = (request.body.facebook) ? request.body.facebook : personaEncontrada.facebook;
        personaEncontrada.linkedin = (request.body.linkedin) ? request.body.linkedin : personaEncontrada.linkedin;
        personaEncontrada.twitter = (request.body.twitter) ? request.body.twitter : personaEncontrada.twitter;
        personaEncontrada.estado = (request.body.estado) ? request.body.estado : personaEncontrada.estado;

        await personaEncontrada.save();
        response.redirect('/respuestaEditar/' + personaEncontrada.id);
    }

)


////carlos
cliente.get('/respuestaEditar/:id', function (request, response) {
    console.log(request.params.id);
    response.render('resultadoModificaCliente',
        {
            id: request.params.id
        })

});

/*William Mora*/ 
cliente.get('/clientes', async function (req, res) {
    console.log(
      "----------------- Estas en la pagina de clientes ----------------------"
    );
  var documentos = await Persona.find();
    res.render('clientes', {
      personas: documentos
    });
  });

  cliente.get('/eliminar/:id', async function(req, res) {
    var id = req.params.id;
    console.log("Eliminando:" + id);

    var persona = await Persona.findById(id);
    await persona.remove();

    res.redirect('/clientes');
});

/*---------------------------------------------------------------------*/

var port = 3000;

// metodos http: GET, POST, PUT, DELETE, OPTIONS

cliente.listen(port, function () {
    console.log("Funciono!")
})


