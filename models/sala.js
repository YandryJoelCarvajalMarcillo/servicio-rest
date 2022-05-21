const { Schema, model} = require ('mongoose');

const SalaSchema = Schema({
    Direccion: {
        type: String,
        required:[true, `La direccion es obligatoria`],

    },
    capacidad:{
        type: Number,
        default: 25
    },
    Estado:{
        type: Boolean,
        default: true,
        required: true
    },
    Precio: {
        type: Number,
        default: 0
    }
})

module.exports = model ('salas', SalaSchema );