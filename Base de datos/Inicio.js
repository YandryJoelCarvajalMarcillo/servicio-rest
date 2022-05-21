//exportamos la libreria de mongoose que previamente instalamos.
const mongoose = require ('mongoose');
const { AdminG } = require('../Consola/Cliente');
//Definimos los datos de conexion al Cluster.
const conexion="mongodb+srv://josereyes0215:Teodolinda15@cluster0.frhsy.mongodb.net/Salas_Tarea?retryWrites=true&w=majority";

(async ()=>{ //función asíncrona que nos devolvera un objeto.
 const estadoConectado=await mongoose.connect(conexion) // se espera una promisa.
 //a traves de la funcion mongoose model definimos los atributos de esta coleccion.

 var TipoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:String,//con el string representamos y manipulamos una secuencia de caracteres.
    descripcion:String,
});

const Tipo_sala=mongoose.model("Tipo_sala",TipoSchema);



const Cons_Tipo=new Tipo_sala({
    _id: new mongoose.Types.ObjectId(),
nombre:"Quinceañera",
descripcion:"Sala de quinceañera con mucha capacidades",
})
const guarda_TipoSala=await Cons_Tipo.save();//Guardamos en la base de datos.

var ClienteSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:String, //con el string representamos y manipulamos una secuencia de caracteres.
    Usuario:String,
    Celular:String,
    Correo:String,
    Contrasena:String,
});
 
var Cliente = mongoose.model('Cliente', ClienteSchema);
const Cons_cliente=new Cliente({
    _id: new mongoose.Types.ObjectId(),
    nombre:"Eber Alarcon",
    Usuario: "Eber01",
    Celular:"09521212121",
    Correo:"eber01@gmail.com",
    Contrasena:"eber01"
})
const guarda_T=await Cons_cliente.save();//Guardamos en la base de datos.

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
const Cons_DIM=new Administradors({
    _id: new mongoose.Types.ObjectId(),
    nombre:"Eber Alarcon",
    Usuario: "Eber01",
    Celular:"09521212121",
    Estado:true,
    Correo:"eber01@gmail.com",
    Contrasena:"eber01"
})
const guarda_TB=await Cons_DIM.save();//Guardamos en la base de datos.

var SuperAd = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:String, //con el string representamos y manipulamos una secuencia de caracteres.
    Usuario:String,
    Celular:String,
    Correo:String,
    Contrasena:String,// buscar objeto de referencia usando mongoose.

})

var SuperAd = mongoose.model("SuperAdmin",SuperAd);
const Spa = new AdminG({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:Pedro, //con el string representamos y manipulamos una secuencia de caracteres.
    Usuario:PedroV,
    Celular:0988079659,
    Correo:pvera9323gmail.com,
    Contrasena:String,// buscar objeto de referencia usando mongoose.

})

const guardar=await Spa.save();//Guardamos en la base de datos.


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

const Cons_ENO=new Empresas({
    _id: new mongoose.Types.ObjectId(),
    nombre:"Eber Alarcon",
    Celular:"09521212121",
    Estado:true,
    Correo:"eber01@gmail.com",
    Direccion:"LOJA",
    idAdministrador:Cons_DIM._id,
})

const guarda_EMP=await Cons_ENO.save();//Guardamos en la base de datos.


var Sala = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    capacidad:Number, // con number representamos y manipulamos valores numericos.
    Precio:Number, 
    Estado:Boolean,
    Direccion:String,
    idEmpresa:{type:mongoose.Types.ObjectId,ref:"Empresa" },// buscar objeto de referencia usando mongoose.
    idTipo:{type:mongoose.Types.ObjectId,ref:"Tipo_sala" },
},
{
    timestamps:true,
    versionKey: false
});

const Salas=mongoose.model("Sala",Sala);

const Cons_SLS=new Salas({
    _id: new mongoose.Types.ObjectId(),
    capacidad:20, // con number representamos y manipulamos valores numericos.
    Precio:10, 
    Estado:true,
    Direccion:"san pedro",
    idEmpresa:Cons_ENO._id,// buscar objeto de referencia usando mongoose.
    idTipo:Cons_Tipo._id,
})
const guarda_TD=await Cons_SLS.save();//Guardamos en la base de datos.

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


const Cons_reserv=new Reservas({
    _id: new mongoose.Types.ObjectId(),
    Monto:20, // con number representamos y manipulamos valores numericos.
    Tipo_pago:'String',
    Fecha:"2021-05-12",
    Estado:true,
    idCliente:Cons_cliente._id,// buscar objeto de referencia usando mongoose.
    idSala:Cons_SLS._id,
})
const guarda_Tg=await Cons_reserv.save();

//a traves de un a funcion await buscamos todos los clientes de la coleccion ya que no tenemos ningun filtro
const resultado=await Tipo_sala.find()
//mostramos el resultados de la colecccion de cliente
console.log(resultado);
})();//fin
