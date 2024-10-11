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

exports.editarCliente = async (req,res) => {

    const cliente = await Model.updateOne({_id:req.body._id}, { $set: {
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
        cpf: req.body.cpf
    }});
    res.json({ sucesso:true });
}

exports.listar = async(req, res) => {
    const cliente = await Model.find();
    res.json(cliente);
}

exports.buscarcliente = async(req, res) => {
    const filtro = {_id:req.params.id};

    const cliente = await Model.findOne(filtro);
    res.json(cliente);
}

exports.removercliente = async(req, res) => {
    const filtro = {_id: req.params.id };
    const clienteremover = await Model.deleteOne(filtro);
    res.json(clienteremover);
}