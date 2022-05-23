require("colors");
const mongoose = require ('mongoose');
const { menu ,Register,Sesion,pausa,} = require("./menu");
var {Administradors} = require('../Cliente');
const conexion="mongodb+srv://josereyes0215:Teodolinda15@cluster0.frhsy.mongodb.net/Salas_Tarea?retryWrites=true&w=majority";
let admin;
const principal = async () => {
   
      let resmenu;
      let restipo;
     
          
      resmenu = await menu();
    
  
      switch (resmenu) {
        case "1": // agregar tarea
        restsesion = await segundo();
      
        break;
        case "2":// ver tareas
        restRegistro = await Register();
        mongoose.connect('mongodb+srv://josereyes0215:Teodolinda15@cluster0.frhsy.mongodb.net/Salas_Tarea?retryWrites=true&w=majority', function (err) {
          if (err) throw err;
           
          console.log('Successfully connected');
           
          var jamieAuthor = new Administradors({
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
break;

};

const pausa = async (mensaje)=>{
    const {pause} = await inquerer.prompt(
        [{type : 'cuestion',
          name : 'pausa',
          message : mensaje          
    
    }])
    return pause;
  }


BuscarUsuario = async (restipos) => {
    //conexion
    const estadoConectado=await mongoose.connect(conexion) 
    //estructurar para q mongo lo entienda
    const dato={Usuario:`${restipos.Usuario}`,Contrasena:`${restipos.Contrasena}`};
    await pausa(console.log(dato));
    //Hacemos la busqueda en la tabla del usuario que se dea buscar
   const conwe= await Administradors.find(dato)
  
  
    return conwe;
  };

}

principal();
