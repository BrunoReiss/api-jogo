var express = require('express');
var bodyParser = require('body-parser');
var expressMongoDb = require('express-mongo-db');

//Inicializa o express
var app = express();

//Inicializa o Body Parser
app.use(bodyParser.json());

//Inicializa o Mongo e o expõe para o Express
app.use(expressMongoDb('mongodb://localhost:27017/rogue'));

//Inicializa o servidor na porta especificada
app.listen(3000, function(){
  console.log('Acesse o servidor http://localhost:3000');
});

//Importa controllers

var soldadoController = require('./controllers/soldado.js');
var hackerController = require('./controllers/hacker.js');
var jornalController = require('./controllers/jornal.js');

//Cria endpoints para funções de controllers
//SITUACOES
app.get('/soldado/:nome', soldadoController.listar);
app.get('/hacker/:nome', hackerController.listar);
app.get('/jornal/:nome', jornalController.listar);
