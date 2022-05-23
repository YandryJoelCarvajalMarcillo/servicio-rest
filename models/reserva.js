const { Schema, model} = require ('mongoose')
var mongoose = require('mongoose');

var Reservar = Schema({

    Monto:{
        type: Number,
        requerid:[true, `Monto requerido`],
    },
    Tipo_pago:{
        type: String,
        requerid:[true, `Tipo de pago requerido`],
    },
    Fecha:{
        type: Date,
        requerid:[true, `Fecha de pago requerida`],
    },
    Estado:{
        type: Boolean,
        requerid:[true, `Estado requerido`],
    },
    idCliente:{
        type:mongoose.Types.ObjectId,
        ref:"Cliente",
        requerid:[true, `id del cliente es requerido`],
    },
    idSala:{type:mongoose.Types.ObjectId,
        ref:"Sala",
        requerid:[true, `id del sala es requerida`],
    },

});

module.exports = model("Reservaciones",Reservar);