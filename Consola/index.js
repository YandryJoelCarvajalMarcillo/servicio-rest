require("colors");
const mongoose = require ('mongoose');
const { menu ,TipoUsuario,Sesion,Menucliente, pausa,Registrar,Buscamos,ListaBuscar,VerReserva,Pago} = require("./menus");
var {Cliente,Tipo_sala,Salas,Empresas,Administradors,Reservas, AdminG} = require('./Cliente');
const conexion="mongodb+srv://josereyes0215:Teodolinda15@cluster0.frhsy.mongodb.net/Salas_Tarea?retryWrites=true&w=majority";
let usuarios;
const principal = async () => {
  try {
    let resmenu;
    let restipo;
    do {
        
    resmenu = await menu();
  

    switch (resmenu) {
      case "1": // agregar tarea
      restsesion = await segundo();
    
      break;
      case "2":// ver tareas
      restRegistro = await Registrar();
      mongoose.connect('mongodb+srv://josereyes0215:Teodolinda15@cluster0.frhsy.mongodb.net/Salas_Tarea?retryWrites=true&w=majority', function (err) {
        if (err) throw err;
         
        console.log('Successfully connected');
         
        var jamieAuthor = new Cliente({
            _id: new mongoose.Types.ObjectId(),
            nombre:restRegistro.nombre, //con el string representamos y manipulamos una secuencia de caracteres.
            Usuario:restRegistro.Usuario,
            Celular:restRegistro.Celular,
            Correo:restRegistro.Correo,
             Contrasena:restRegistro.Contrasena,
        });
     
        jamieAuthor.save(function(err) {
            if (err) throw err;

            
        });
       
    });
     //Guardamos en la base de datos.
     await pausa(console.log('Cliente successfully saved.'));

      
      break;
      
    }

  } while (resmenu != 0);
return resmenu;
  } catch (error) {
    console.log(error);
  }
};

const 
segundo = async () => {
  
    let restcliente;
    let restipo;
    do{
        
      restipo = await TipoUsuario();
await pausa(console.log(restipo));
    switch (restipo) {
      
      case "1": // Casa para iniciar sesion
   let restsesion;
do{
  //llamamos al capturador de datos
 restsesion = await Sesion();
     await pausa(console.log(restsesion));
     //retorno los resultados de la busqueda
     ressesion = await BuscarUsuario(restsesion);
      await pausa(console.log(ressesion.length));
}while(ressesion.length==0)

/*
do{
  restsesion = await SesionSuper();
     await pausa(console.log(restsesion));
      ressesion = await BuscarUsuario(restsesion);
       await pausa(console.log(ressesion.length));
 }while(ressesion.length==0)
*/
 usuarios=ressesion;
 await pausa(console.log(usuarios[0]._id));
        restcliente = await Menucliente(usuarios); 
        await pausa(console.log(restcliente));
        switch(restcliente){
          case "1": // agregar tarea para tipo de sala para alquilar
          await pausa(console.log("Buscamos por tipo"));
          restipos = await buscar();
          await pausa(console.log(restipos));
          resala = await salas_tipo(restipos);
          let table=[] 
         
          table= await tabla(resala);
         
          //Para finalizar una tarea
          await pausa(console.table(table));
        


          break;
          case "2": // asgregar tarea para reservar 
          await pausa(console.log("aqui va las reservas "));
          restipos = await buscar();
          await pausa(console.log(restipos));
          resala = await CapturarSala(restipos);
          
          await pausa(console.log(resala));
          guaradarReserva = await GuaradarSala(resala,usuarios);
         
          break;
          case "3": // agregar tarea pagar
          await pausa(console.log(" aqui va lo de pagar "));
          reservaciones = await buscarReserva(usuarios);
          await pausa(console.log(reservaciones));
          pago = await Pago();
          await pausa(console.log(pago));
          resala = await Actualizar_pago(reservaciones,pago);
          restcliente = await Menucliente(usuarios); 

          break;
          case "4": // agregar tarea para cancelar la reserva
          await pausa(console.log(" Cancelar reserva "));
          break;
          case "5": // agregar tarea para cerrar sesion.
          await pausa(console.log(" sesion cerrada "));
          break;
        }
    
      break;


      case"3":
      await pausa(console.log("Aqui va tu wbd"));

      //sesion del superadministrador
      //Envias menus de opciones  de superadmin
      //crear un menu con las opciones del superadministrador
      //crear funcion buscar  admin.
      //funcion para mostrar los resultados(esta va en menu)
      //funcion q realice la operacion
      break;
      case "4": // agregar tarea
      restsesion = await principal();
    switch(restsesion){
      case "0": // agregar tarea
      restipo=5;
      break;
    }
      break;
      
     
    }
    }while(restipo!=5)
};

//buscar el tipo de reserva y capturarlo en un promt
const
buscar = async () => {
  const estadoConectado=await mongoose.connect(conexion) 
  const conwe= await Tipo_sala.find()
  //mostramos el resultados de la colecccion de cliente
  const resultado=await Buscamos(conwe);

return resultado;
};

const
CapturarSala = async (sala) => {
  const estadoConectado=await mongoose.connect(conexion) 
  const datos={idTipo:`${restipos.idTipo}`};
  await pausa(console.log(datos));
 const conwe= await Salas.find(datos)
  //mostramos el resultados de la colecccion de cliente
  const resultado=await VerSala(conwe);
  await pausa(console.log(resultado));
return resultado;
};
//Yandry Buscar reservas de un usuario
const
buscarReserva = async (usuarios) => {
  const estadoConectado=await mongoose.connect(conexion) 
  const datos={idCliente:`${usuarios[0]._id}`,Estado:true};
  await pausa(console.log(datos));
 const conwe= await Reservas.find(datos)
 

  await pausa(console.log(conwe));
  const resultado=await VerReserva(conwe);
return resultado;
};
//Guardamos la salas_tipo
const
GuaradarSala = async (sala,usuario) => {
  const estadoConectado=await mongoose.connect(conexion) 
  await pausa(console.log('Successfully connected'));
  await pausa(console.log(sala));
  await pausa(console.log(usuarios[0]._id));
  //crear la fecha que se hacela reserva
    let date = new Date();
    let output =  date.getFullYear()+ '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' +String(date.getDate()).padStart(2, '0');
    var fecha=`"${output}"`;
    await pausa(console.log(fecha));
    const jamieAuthor = new Reservas({
        _id: new mongoose.Types.ObjectId(),
        Monto:0,
    Tipo_pago:'',
    Fecha:fecha,
    Estado:true,
    idCliente:usuarios[0]._id,
    idSala:sala.idSala,

    });
    pausa(console.log(jamieAuthor));

    const guardar=await jamieAuthor.save(jamieAuthor);
 

};

//actualizar reserva y realiazr los pagos
const
Actualizar_pago = async (reservaciones,reserva) => {
  const estadoConectado=await mongoose.connect(conexion) 
  await pausa(console.log(reservaciones));
  const datos={Monto:parseInt(reserva.Monto)};

  const id={_id:`${reservaciones.idSala}`};

  const datos1={Tipo_pago:`${reserva.Tipo_pago}`};

//actualizar el monto
 const conwe= await Reservas.updateOne(id,{$set:
  datos
 });
 //actualizar tipo de pago
 const sala= await Reservas.updateOne(id,{$set:
  datos1
 });
  await pausa(console.log(conwe));
return conwe;
};





//Buscamos la sala  disponible 

const
salas_tipo = async (restipos) => {
  await pausa(console.log(restipos));
  const estadoConectado=await mongoose.connect(conexion) 
  const datos={idTipo:`${restipos.idTipo}`};
  await pausa(console.log(datos));
 const conwe= await Salas.find(datos)
  await pausa(console.log(conwe));
return conwe;
};
//Mostramos la sala en un tabla
const
tabla = async (restipos) => {
  await pausa(console.log(restipos));
  const estadoConectado=await mongoose.connect(conexion) 
  const dato={idEmpresa:`${restipos.idEmpresa}`};
  const datos={idEmpresa:`${restipos.idEmpresa}`};
  const datos1={idTipo:`${restipos.idTipo}`};
 const conwe= await Empresas.findOne(datos)
 const conwe1= await Tipo_sala.findOne(datos1)
  await pausa(console.log(restipos.capacidad));
  await pausa(console.log(conwe1));
  let tabla={
    nombre: conwe1.nombre,
    descripcion:conwe1.descripcion,
    Empresa:conwe.nombre,
    Correo:conwe.Correo,
  }

  await pausa(console.log(tabla));
return tabla;
};

const
BuscarUsuario = async (restipos) => {
  //conexion
  const estadoConectado=await mongoose.connect(conexion) 
  //estructurar para q mongo lo entienda
  const dato={Usuario:`${restipos.Usuario}`,Contrasena:`${restipos.Contrasena}`};
  await pausa(console.log(dato));
  //Hacemos la busqueda en la tabla del usuario que se dea buscar
 const conwe= await Cliente.find(dato)


  return conwe;
};
const
ver = async (restipos) => {
  const estadoConectado=await mongoose.connect(conexion)
 const conwe= await Cliente.find()
 await pausa(console.log(conwe));

};


segundo();
module.exports ={buscar};