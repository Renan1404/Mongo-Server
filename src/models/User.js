const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // Aqui são as configurações do esquema do usuário
});

module.exports = mongoose.model('User', userSchema);
