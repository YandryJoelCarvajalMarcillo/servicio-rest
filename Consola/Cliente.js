var mongoose = require('mongoose');
 
var ClienteSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:String, //con el string representamos y manipulamos una secuencia de caracteres.
    Usuario:String,
    Celular:String,
    Correo:String,
    Contrasena:String,
});
 
var Cliente = mongoose.model('Cliente', ClienteSchema);

var TipoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:String,//con el string representamos y manipulamos una secuencia de caracteres.
    descripcion:String,
});

const Tipo_sala=mongoose.model("Tipo_sala",TipoSchema);

var Sala = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    capacidad:Number, // con number representamos y manipulamos valores numericos.
    Precio:Number, 
    Estado:Boolean,
    Direccion:String,


    idlocal:{type:mongoose.Types.ObjectId,ref:"Empresa" },// buscar objeto de referencia usando mongoose.
    idTipo:{type:mongoose.Types.ObjectId,ref:"Tipo_sala" },
},
{
    timestamps:true,
    versionKey: false
});

const Salas=mongoose.model("Salas",Sala);


var Empresa = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:String, // con number representamos y manipulamos valores numericos.
    Celular:String, 
    Estado:Boolean,
    Correo:String,
    Direccion:String,
    idAdministrador:{type:mongoose.Types.ObjectId,ref:"Administrador" },// buscar objeto de referencia usando mongoose.
    
});

const Empresas=mongoose.model("Empresa",Empresa);

var Administrador = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:String, //con el string representamos y manipulamos una secuencia de caracteres.
    Usuario:String,
    Celular:String,
    Estado:Boolean,
    Correo:String,
    Contrasena:String,// buscar objeto de referencia usando mongoose.
    
});

const Administradors=mongoose.model("Administrador",Administrador);


var Reservar = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Monto:Number,
    Tipo_pago:String,
    Fecha:Date,
    Estado:Boolean,
    idCliente:{type:mongoose.Types.ObjectId,ref:"Cliente"},
    idSala:{type:mongoose.Types.ObjectId,ref:"Sala"},

});

const Reservas=mongoose.model("Reservaciones",Reservar);

var SuperAd = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:String, //con el string representamos y manipulamos una secuencia de caracteres.
    Usuario:String,
    Celular:String,
    Correo:String,
    Contrasena:String,// buscar objeto de referencia usando mongoose.

})

const AdminG = mongoose.model("SuperAdministrador", SuperAd);


module.exports = {Cliente,Tipo_sala,Salas,Empresas,Administradors,Reservas,AdminG};