const { query } = require('express');
const Model = require('./model');

exports.novoProduto = async (req,res) => {

    const produto = new Model ({
        nome: req.body.nome,
        descricao: req.body.descricao,
        valor: req.body.valor,
        url: req.body.url
    });

    await produto.save();
    res.json({ sucesso:true });
}

exports.listar = async(req, res) => {
    const filtro = {};
    if (req.query && req.query.busca) {
        filtro.nome = { $regex: req.query.busca, $options: "mi" }
    }
    const produtos = await Model.find(filtro);
    res.json(produtos);
}

