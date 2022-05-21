const { response} = require ('express');
const {Sala}= require ('../models')

const CrearSala = async (req, res)=>{
    const {estado, ...body} = req.body;

    const sala = new Sala(body);
    const SalaNueva = await sala.save();
    res.status(201).json(SalaNueva);
}
const prueba = async (req, res=response)=>{
    const SalaNueva = await Sala.find();
    res.json(SalaNueva);
}
const EditarSala = async (req, res)=>{
    const {id}= req.params;
    const {estado, ...data} = req.body;
    const SalaModificada = await Sala.findByIdAndUpdate(id, data, {new: true});
    res.json(SalaModificada);
}
const EliminarSala = async (req, res)=>{
    const {id} = req.params
    const SalaEliminada= await Sala.findByIdAndUpdate(id,{estado:false}, {new:true});
    res.json(SalaEliminada);
}

module.exports={
    CrearSala,
    EditarSala, 
    EliminarSala,prueba
}