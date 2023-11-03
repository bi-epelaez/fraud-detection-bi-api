const mongoose = require("mongoose");

const userScheme = mongoose.Schema({
    usuario: {
        type: String,
        required: true
    },
    instalacion: {
        type: Number,
        required: true
    },
    tarjetas: [{
        noTarjeta:{
            type: Number,
            required: true
        },
        tipoTarjeta:{
            type: String,
            required: true
        }
    }],
    cif: {
        type: Number,
        required: true
    },
    NoTransaccion: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userScheme);

