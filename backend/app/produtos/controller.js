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

exports.editarProduto = async (req,res) => {

    const produto = await Model.updateOne({_id:req.body._id}, { $set: {
        nome: req.body.nome,
        descricao: req.body.descricao,
        valor: req.body.valor,
        url: req.body.url
    }});
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

exports.buscarproduto = async(req, res) => {
    const filtro = {_id:req.params.id};

    const produtos = await Model.findOne(filtro);
    res.json(produtos);
}