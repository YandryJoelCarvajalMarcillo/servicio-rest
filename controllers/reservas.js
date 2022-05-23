const { response} = require ('express');
const {Reserva}= require ('../models')

const verReserva = async (req, res=response)=>{
    const VerReserva = await Reservas.find();
    res.json(VerReserva);
}

module.exports={
    verReserva
}
