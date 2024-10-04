
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

// ROTAS PRODUTOS
app.post('/novo-produtos', require('./app/produtos/controller').novoProduto);
app.get('/listar-produtos', require('./app/produtos/controller').listar);
app.get('/buscar-produto/:id', require('./app/produtos/controller').buscarproduto);
app.post('/editar-produto', require('./app/produtos/controller').editarProduto);


// ROTAS CLIENTES
app.post('/novo-cliente', require('./app/cliente/controller').novoCliente);
app.get('/listar-cliente', require('./app/cliente/controller').listar);

app.listen(8560); // APP DEFINDO SUA PORTA
console.log("Sistema rodando na porta 8560...");

