const { response} = require ('express');
const {Sala,Cliente}= require ('../models');


const VerCliente = async (req, res=response)=>{
    const SalaNueva = await Clientes.find();
    res.json(SalaNueva);
}

const CrearCliente = async (req, res)=>{
    const {body} = req.body;

    const sala = new Cliente(req.body);
    const SalaNueva = await sala.save();
    res.status(201).json(SalaNueva);
}

module.exports={
    VerCliente,
    CrearCliente,
}