const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('sua string de conexão', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB conectado com sucesso');
    } catch (error) {
        console.error('Falha na conexão com o MongoDB: ', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
