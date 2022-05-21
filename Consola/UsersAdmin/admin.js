// const mongoose = require ('mongoose')
//Para cifrar las contraseñas
// const bcrypt = require ('bcrypt')
//requiero mogoose nuevamente y va re4querir dos objetos
const {Schema, model}=require('mongoose')

const taskSchemaaa = new Schema({
    nombre:{type:String},
    nusuario: {type:String},
    correo: {type:String},
    contrasena: {type: String}
},
{
    timestamps:true,
    versionKey: false
}
);
//Metodo para cifrar la contraseña
// taskSchemaaa.methods.encryptPassword = (contraseña) =>{
//     return bcrypt.hashSync(contraseña, bcrypt.genSaltSync(10));
// };

// taskSchemaaa.methods.compararPassaword = function (contraseña){
//     return bcrypt.compareSync(contraseña, this.contraseña);

// };

module.exports = model


("Administradores", taskSchemaaa)