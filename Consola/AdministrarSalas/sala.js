// requiero mogoose nuevamente y va re4querir dos objetos
var mongoose = require('mongoose'); 


//Como estaba
const {Schema, model} = require('mongoose')


//Agregue despues del new "mongoose."
const taskSchema = new Schema({
    title:{type:String},
    precio: {type:String},
    celular: {type:String},
    correo: {type: String},
    direccion: {type: String}
},
{
    timestamps:true,
    versionKey: false
}
)


// Como estaba
module.exports = model
("Salas", taskSchema)

//MODIFICADO

// const SalaEvento = new mongoose.model ("Salas", taskSchema)
// module.exports ={ SalaEvento}