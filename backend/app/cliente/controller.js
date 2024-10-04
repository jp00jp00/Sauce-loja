const Model = require('./model');

exports.novoCliente = async (req,res) => {
    const cliente = new Model ({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
        cpf: req.body.cpf
    });

    await cliente.save();
    res.json({ sucesso:true });
}

exports.listar = async(req, res) => {
    const cliente = await Model.find();
    res.json(cliente);
}

