
const express = require('express');
const app = express(); // Instanciando na constante app, todo o conteúdo do framework express.
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "350mb" }));
app.use(cors());

// GET - ROTA PARA VISUALIZAR OU BUSCAR ALGO EM ESPECIFICO
// POST - ROTA PARA CRIAR ALGO
// PUT - ROTA PARA EDITAR ALGO
// DELETE - ROTA PARA DELETAR

app.get('/listar-tenis', function (req, res) {

    const tenis = [
        {
            nome: 'Nike SB',
            descricao: 'Tenis daora',
            valor: 'R$ 670,50',
            url: 'https://acdn.mitiendanube.com/stores/001/724/746/products/e4bc7a88-5f88-4188-95e5-7137244d9e541-f2368d2228c771857216795453235590-1024-1024.jpeg',
        },
        {
            nome: 'Nike Dunk Low',
            descricao: 'Tenis daora low',
            valor: 'R$ 770,50',
            url: 'https://imgnike-a.akamaihd.net/1300x1300/02912751A8.jpg',
        },
        {
            nome: 'Nike Dunk Low',
            descricao: 'Tenis daora low',
            valor: 'R$ 770,50',
            url: 'https://imgnike-a.akamaihd.net/1300x1300/02912751A8.jpg',
        },
        {
            nome: 'Nike Dunk Low',
            descricao: 'Tenis daora low',
            valor: 'R$ 770,50',
            url: 'https://imgnike-a.akamaihd.net/1300x1300/02912751A8.jpg',
        },
        {
            nome: 'Nike Dunk Low',
            descricao: 'Tenis daora low',
            valor: 'R$ 770,50',
            url: 'https://imgnike-a.akamaihd.net/1300x1300/02912751A8.jpg',
        },
        {
            nome: 'Nike Dunk Low',
            descricao: 'Tenis daora low',
            valor: 'R$ 770,50',
            url: 'https://imgnike-a.akamaihd.net/1300x1300/02912751A8.jpg',
        },
        {
            nome: 'Nike Dunk Low',
            descricao: 'Tenis daora low',
            valor: 'R$ 770,50',
            url: 'https://imgnike-a.akamaihd.net/1300x1300/02912751A8.jpg',
        }
    ];
    
    res.json(tenis);

});

app.listen(8560); // APP DEFINDO SUA PORTA
console.log("Sistema rodando na porta 8560...");

