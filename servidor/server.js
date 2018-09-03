var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var competenciasController = require ('./controlador/CompetenciasController');

var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//Pedidos a la base de datos (primero query params)
app.get('/generos', competenciasController.cargarGeneros);
app.get('/directores', competenciasController.cargarDirectores);
app.get('/actores', competenciasController.cargarActores);

app.get('/competencias/:id/peliculas', competenciasController.peliculaAleatoria);
app.post('/competencias/:idCompetencia/voto', competenciasController.guardarVoto);
app.get('/competencias/:id/resultados', competenciasController.obtenerResultados);
app.get('/competencias/:id', competenciasController.nombreCompetencia);
app.get('/competencias', competenciasController.buscarCompetencias);

app.post('/competencias', competenciasController.crearNuevaCompetencia);
app.put('/competencias/:id', competenciasController.editarCompetencia);

app.delete('/competencias/:id/votos', competenciasController.eliminarVotos);
app.delete('/competencias/:idCompetencia', competenciasController.eliminarCompetencia);

var puerto = '8080';

app.listen(puerto, function () {
  console.log( "Escuchando en el puerto " + puerto );
});


