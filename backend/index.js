
const express = require('express');
const app = express(); // Instanciando na constante app, todo o conteúdo do framework express.
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "350mb" }));
app.use(cors());

require('./connectionDB');

// GET - ROTA PARA VISUALIZAR OU BUSCAR ALGO EM ESPECIFICO
// POST - ROTA PARA CRIAR ALGO
// PUT - ROTA PARA EDITAR ALGO
// DELETE - ROTA PARA DELETAR

app.post('/novo-tenis', require('./app/produtos/controller').novoProduto);
app.get('/listar-tenis', require('./app/produtos/controller').listar);

app.listen(8560); // APP DEFINDO SUA PORTA
console.log("Sistema rodando na porta 8560...");

