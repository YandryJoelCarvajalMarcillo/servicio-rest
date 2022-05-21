
//Voy a requerir command
// require ('./helpers/menuu')
var mongoose = require('mongoose'); 
const {program, Command} = require('commander')
const inquerer = require('inquirer');
const { menu, TaksQuestion, elimina} = require ('./menu');
const {_id, title} =require ('./task.controllers')
const {prompt}=require ('inquirer')



    //AGG 15/05/2022
    // const listTareas = require("./clases/class");
//Llamar la funcion de la base de datos
const {connectDB} = require ('./db');
const { Registrar, ListarSala, updateTask, Actualizar } = require('./task.controllers');

async function main(){
    await connectDB();

}
main()

const principal = async() =>{

    //AGG 15/05/2022
    

    //Estrucutra para que no se termine el programa    
    let aux ='';
    // do {
    
        //Una linea de codigo para limpiar la consola
        // console.clear();
        
    
    
    // Constante y objeto para el menu
    const { opciones } = await menu();
    // const newtarea = new Admin();
    aux = opciones;
    const TaksQuestion=[
        {
            type: 'input',
            name: 'capacidad',
            message: 'Ingrese CANTIDAD DE LA SALA',
            
        },
        {
            type: 'input',
            name: 'Direccion',
            message: 'Ingrese LA DIRECCION DE LA SALA',                          
            
        },
        {
            type: 'input',
            name: 'Precio',
            message: 'Ingrese EL PRECIO',
            
        }
]

// const elimina =[
//     {
//         type: 'input',
//         message: 'ELIMINE UNA SALA',
//         name: 'borra'
//     }
// ]
   
// const actualiza =[{
//     type: 'input',
//     message: 'ACTUALICE UNA SALA',
//     name: 'update'
// }]    
    // const getNewTask = async ()=>{

    //     const description = await inquerer.prompt({ 
    //       type : 'input',
    //       name : 'description',
    //       message : 'Ingrese la Descripción',
    //       validate: function (input) {
    //         // Declare function as asynchronous, and save the done callback
    //         var done = this.async();
      
    //           input = input.trim();// quita los espacios solo para la validacion
              
    //           if (input == '') {
    //             // Pass the return value in the done callback
    //             done('You need to provide a description');
    //             return;
    //           }
    //           // Pass the return value in the done callback
    //           done(null, true);
            
    //       }
    //     })
      
    //     return description;

    //crear un switch para cada una de las tareas
    switch (opciones) {
        //crear la tarea
        case '1':
            //Mensaje de consola
            console.log('Por favor, llenar los datos!!')
            //Metodo
            const answerss = await prompt(TaksQuestion);           
            Registrar (answerss);              
            break;
            //listar las tareas

//Caso para eliminar una sala
            case '2':
            //     await inquerer.prompt({ 
            //         type : 'input',
            //         name : 'description',
            //         message : 'Ingrese la Sala a eliminar',
                    
                    
            // })
           
           removeTask(_id)
       
            
     //Mensaje de consola


        
     break; 
//Caso para mostrar las salas existentes         
            case '3':
ListarSala();
            break;
//Caso para modificar una sala
        case '4':
            await inquerer.prompt({ 
                type : 'input',
                name : 'description',
                message : 'Ingrese la Sala a actualizar',
            
        })    
        
        await prompt (TaksQuestion)   
        Actualizar();
        

            break;
//Caso para salir de las preguntas
            case '0':
                process.exit();

            break;


    }


};




principal ();










// require("colors");
// const mongoose = require ('mongoose');
// const { menu ,Registrarr} = require("./menu");
// var {Salas} = require('../Cliente');
// // const conexion='mongodb+srv://josereyes0215:Teodolinda15@cluster0.frhsy.mongodb.net/Salas_Tarea?retryWrites=true&w=majority';
// // let usuarios;
// const principal = async () => {
// //   try {
// //     let resmenu;
// //     let restipo;
//     // do {
        
//     resmenu = await menu();
  

//     switch (resmenu) {
      
    
     
//       case "1":// ver tareas
//       restRegistro = await Registrarr();
//       mongoose.connect('mongodb+srv://josereyes0215:Teodolinda15@cluster0.frhsy.mongodb.net/Salas_Tarea?retryWrites=true&w=majority', function (err) {
//         if (err) throw err;
         
//         console.log('Successfully connected');
         
//         var jamieAuthorr = new Salas({
//             _id: new mongoose.Types.ObjectId(),
//             capacidad:restRegistro.capacidad, //con el string representamos y manipulamos una secuencia de caracteres.
//             Direccion:restRegistro.Direccion,
//             Precio:restRegistro.Precio,
//         });
     
//         jamieAuthorr.save(function(err) {
            

            
//         });
       
//     });
//      //Guardamos en la base de datos.
//      await pausa(console.log('Cliente successfully saved.'));

      
//       break;
      
//     }
    
// //   } while (resmenu != 0);
// // return resmenu;
// //   } catch (error) {
// //     console.log(error);
//   };
// principal();

// const 
// segundo = async () => {
  
//     let restcliente;
//     let restipo;
//     do{
        
//       restipo = await TipoUsuario();
// await pausa(console.log(restipo));
//     switch (restipo) {
      
//       case "1": // agregar tarea
//    let restsesion;
// do{
//  restsesion = await Sesion();
//      await pausa(console.log(restsesion));
//      ressesion = await BuscarUsuario(restsesion);
//       await pausa(console.log(ressesion.length));
// }while(ressesion.length==0)

//  usuarios=ressesion;
//  await pausa(console.log(usuarios[0].Usuario));
//         restcliente = await Menucliente(usuarios); 
//         await pausa(console.log(restcliente));
//         switch(restcliente){
//           case "1": // agregar tarea para tipo de sala para alquilar
//           await pausa(console.log("Buscamos por tipo"));
//           restipos = await buscar();
//           await pausa(console.log(restipos));
//           resala = await salas_tipo(restipos);
//           let table=[] 
         
//           table= await tabla(resala);
         
//           //Para finalizar una tarea
//           await pausa(console.table(table));
        


//           break;
//           case "2": // asgregar tarea para reservar 
//           await pausa(console.log("aqui va las reservas "));
//           break;
//           case "3": // agregar tarea pagar
//           await pausa(console.log(" aqui va lo de pagar "));
//           break;
//           case "4": // agregar tarea para cancelar la reserva
//           await pausa(console.log(" Cancelar reserva "));
//           break;
//           case "5": // agregar tarea para cerrar sesion.
//           await pausa(console.log(" sesion cerrada "));
//           break;
//         }
    
//       break;

//       case "4": // agregar tarea
//       restsesion = await principal();
//     switch(restsesion){
//       case "0": // agregar tarea
//       restipo=5;
//       break;
//     }
//       break;
      
     
//     }
//     }while(restipo!=5)
// };
// const
// buscar = async () => {
//   const estadoConectado=await mongoose.connect(conexion) 
//   const conwe= await Tipo_sala.find()
//   //mostramos el resultados de la colecccion de cliente
//   const resultado=await Buscamos(conwe);

// return resultado;
// };


// const
// salas_tipo = async (restipos) => {
//   await pausa(console.log(restipos));
//   const estadoConectado=await mongoose.connect(conexion) 
//   const datos={idTipo:`${restipos.idTipo}`};
//   await pausa(console.log(datos));
//  const conwe= await Salas.find(datos)
//   await pausa(console.log(conwe));
// return conwe;
// };
// const
// tabla = async (restipos) => {
//   await pausa(console.log(restipos));
//   const estadoConectado=await mongoose.connect(conexion) 
//   const dato={idEmpresa:`${restipos.idEmpresa}`};
//   const datos={idEmpresa:`${restipos.idEmpresa}`};
//   const datos1={idTipo:`${restipos.idTipo}`};
//  const conwe= await Empresas.findOne(datos)
//  const conwe1= await Tipo_sala.findOne(datos1)
//   await pausa(console.log(restipos.capacidad));
//   await pausa(console.log(conwe1));
//   let tabla={
//     nombre: conwe1.nombre,
//     descripcion:conwe1.descripcion,
//     Empresa:conwe.nombre,
//     Correo:conwe.Correo,
//   }

//   await pausa(console.log(tabla));
// return tabla;
// };

// const
// BuscarUsuario = async (restipos) => {
//   const estadoConectado=await mongoose.connect(conexion) 
//   const dato={Usuario:`${restipos.Usuario}`,Contrasena:`${restipos.Contrasena}`};
//   await pausa(console.log(dato));
//  const conwe= await Cliente.find(dato)


//   return conwe;
// };
// const
// ver = async (restipos) => {
//   const estadoConectado=await mongoose.connect(conexion)
//  const conwe= await Cliente.find()
//  await pausa(console.log(conwe));
 



// segundo();
// module.exports ={buscar};


// //Voy a requerir command
// // require ('./helpers/menuu')
// var mongoose = require('mongoose'); 

// const inquerer = require('inquirer');
// const { menu, TaksQuestion} = require ('./menu');
// // const {_id, title} =require ('./controllers/task.controllers')
// const {prompt}=require ('inquirer')
// const {addTask, removeTask, listTask, updateTask}= require ('./task.controllers')
// const {Sala}= require ('/Users/ebera/Desktop/Trabajo-Autonomo-Salas/Base de datos/Inicio')
// const { menu, Registrar} = require("./menus");


//     //AGG 15/05/2022
//     // const listTareas = require("./clases/class");
// //Llamar la funcion de la base de datos
// const {connectDB} = require ('./db')
// async function main(){
//     await connectDB();

// }
// main()

// const principal = async() =>{

//     //AGG 15/05/2022
    

//     //Estrucutra para que no se termine el programa    
//     let aux ='';
//     // do {
    
//         //Una linea de codigo para limpiar la consola
//         // console.clear();
        
    
    
//     // Constante y objeto para el menu
//     const { opciones } = await menu();
//     // const newtarea = new Admin();
//     aux = opciones;
//     const TaksQuestion=[
//         {
//             type: 'input',
//             message: 'Ingrese CANTIDAD DE LA SALA',
//             name: 'capacidad'
//         },
//         {
//             type: 'input',
//             message: 'Ingrese LA DIRECCION DE LA SALA',
//             name: 'Direccion'
//         },
//         {
//             type: 'input',
//             message: 'Ingrese EL PRECIO',
//             name: 'Precio'
//         }
    
        
//     ]
// // const elimina =[
// //     {
// //         type: 'input',
// //         message: 'ELIMINE UNA SALA',
// //         name: 'borra'
// //     }
// // ]
   
// // const actualiza =[{
// //     type: 'input',
// //     message: 'ACTUALICE UNA SALA',
// //     name: 'update'
// // }]    
//     // const getNewTask = async ()=>{

//     //     const description = await inquerer.prompt({ 
//     //       type : 'input',
//     //       name : 'description',
//     //       message : 'Ingrese la Descripción',
//     //       validate: function (input) {
//     //         // Declare function as asynchronous, and save the done callback
//     //         var done = this.async();
      
//     //           input = input.trim();// quita los espacios solo para la validacion
              
//     //           if (input == '') {
//     //             // Pass the return value in the done callback
//     //             done('You need to provide a description');
//     //             return;
//     //           }
//     //           // Pass the return value in the done callback
//     //           done(null, true);
            
//     //       }
//     //     })
      
//     //     return description;

//     //crear un switch para cada una de las tareas
//     switch (opciones) {
//         //crear la tarea
//         case '1':

//             restSala = await Registrar();
//             mongoose.connect('mongodb+srv://josereyes0215:Teodolinda15@cluster0.frhsy.mongodb.net/Salas_Tarea?retryWrites=true&w=majority', function (err) {
//               if (err) throw err;
               
//               console.log('Successfully connected');
               
//               var salaevento = new Sala({
//                   _id: new mongoose.Types.ObjectId(),
//                   capacidad:restSala.capacidad, //con el string representamos y manipulamos una secuencia de caracteres.
//                   Direccion:restSala.Direccion,
//                   Precio:Precio.Celular,
                  
//               });
           
//               salaevento.save(function(err) {
//                   if (err) throw err;
      
                  
//               });
             
//           });
//            //Guardamos en la base de datos.
//            await pausa(console.log('Cliente successfully saved.'));






//             //Mensaje de consola
//             console.log('Por favor, llenar los datos!!')
//             //Metodo
//             const answerss = await prompt(TaksQuestion);           
//             addTask(answerss);      
            
            



//             break;
//             //listar las tareas

// //Caso para eliminar una sala
//             case '2':
//             //     await inquerer.prompt({ 
//             //         type : 'input',
//             //         name : 'description',
//             //         message : 'Ingrese la Sala a eliminar',
                    
                    
//             // })
           
//            removeTask(_id)
       
            
//      //Mensaje de consola


        
//      break; 
// //Caso para mostrar las salas existentes         
//             case '3':
// listTask();
//             break;
// //Caso para modificar una sala
//         case '4':
//             await inquerer.prompt({ 
//                 type : 'input',
//                 name : 'description',
//                 message : 'Ingrese la Sala a actualizar',
            
//         })    
        
//         await prompt (TaksQuestion)   
//         updateTask(_id);
        

//             break;
// //Caso para salir de las preguntas
//             case '0':
//                 process.exit();

//             break;


//     }
//     // const array = lista.traerDataFromDB();
//     //    const deleteID = await menuBorrar(array);
//     //    const ok = await confirmar(`'¿ Desea ${ 'borrar'.red } la ${'tarea'.green }? '`);
//     //    (ok) ? lista.delteData(deleteID) : false
//     //    await pausa(`Presione ${'Enter'.green} para Continuar `);
//         // const menuBorrar = async (tareas = [])=>{ // menu de items a borrar 
//         //         // lista las tareas en el apartado de borrar
//         //           const choices = tareas.map( (tarea, i) => {
                
//         //               const idx = `${i + 1}.`.green;
                
//         //               return {
//         //                   value: tarea,
//         //                   name:  `${ idx } ${ tarea.descripcion } : : agregada el ${'DIA '.cyan} :${tarea.fecha}`
//         //               }
//         //           });
//         //           choices.unshift({
//         //               value: '0',
//         //               name: '0.'.green + ' Cancelar'
//         //           });
                
//         //           const preguntas = [
//         //               {
//         //                   type: 'list',
//         //                   name: 'id',
//         //                   pageSize: 20,
//         //                   message: 'Borrar',
//         //                   choices
//         //               }
//         //           ]
//         //           const { id } = await inquerer.prompt(preguntas);
//         //           return id.id;
//         //         }
//         //         const confirmar = async(message) => {// confirmacion para borrar tareas
              
//         //           const question = [
//         //               {
//         //                   type: 'confirm',
//         //                   name: 'ok',
//         //                   message
//         //               }
//         //           ];
                
//         //           const { ok } = await inquerer.prompt(question);
//         //           return ok;
//         //         } 
//             //borrar tareas
//         };
//     //cierra ciclo
//     // } while (aux !=0);

//     principal ();

    
  
    
// // require ('colors');
// // const {menu, getNewTask} = require ("./clases/menu");
// // const listTareas = require("./controllers/task.controllers");

// // const principal = async ()=>{

// //     try {
// //         let resmenu;
// //         do {
            
// //         resmenu = await menu();
// //        const lista = new listTareas();
    
// //         switch (resmenu) {
// //           case "1": // agregar tarea
// //           const {description} = await getNewTask();
          
// //           lista.nuevaTarea(description);
// //           await pausa(`Se ha agregado ${'CORRECTAMENTE'.green}`);
// //           break;
    
// //         //   case "2":// ver tareas
// //         //   console.clear();
// //         //   lista.mostrarTareas();
// //         //   await pausa(`Presione ${'Enter'.green} para Continuar `);
          
// //         //   break;
// //         //   case "3"://borrar tareas
    
// //         //    const array = lista.traerDataFromDB();
// //         //    const deleteID = await menuBorrar(array);
// //         //    const ok = await confirmar(`'¿ Desea ${ 'borrar'.red } la ${'tarea'.green }? '`);
// //         //    (ok) ? lista.delteData(deleteID) : false
// //         //    await pausa(`Presione ${'Enter'.green} para Continuar `);
    
// //         //   break;
// //         }
    
// //       } while (resmenu != 0);
    
// //       } catch (error) {
// //         console.log(error);
// //       }
// //     };
    
// //     principal();
    






