const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    nome: String,
    email: String,
    telefone: Number,
    cpf: String
});

module.exports = mongoose.model('Cliente',Schema);