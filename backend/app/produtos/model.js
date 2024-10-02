const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    nome: String,
    descricao: String,
    valor: Number,
    url: String
});

module.exports = mongoose.model('Produto',Schema);

