// const Salas = require('../admin/sala')

const {connection} = require ('./db')
const Sala = require('../Cliente');
//COMO ESTABA

// const {connection} = require ('../db');
// const Salas = require('../admin/sala');
// const {SalaEvento} = require ('../admin/sala');
var mongoose = require('mongoose'); 
var {Salas} = require('../Cliente');
//Creo una funcion de llamar tareas
const Registrar =async (sala)=>{
    var RegistrarSala = new Salas({
                _id: new mongoose.Types.ObjectId(),
                capacidad:sala.capacidad, //con el string representamos y manipulamos una secuencia de caracteres.
                Direccion:sala.Direccion,
                Precio:sala.Precio,
    });
 
    RegistrarSala.save(function(err) {
        if (err) throw err;
console.log('Dato guardado con exito!!!');
        
    });
}

const ActualizarSala = async()=>{
    const tasks = await Salas.find().lean();
}

const updateTask = async(id)=>{
    await Salas.updateOne(id);
    console.log("Dato Actualizado")
    await connection.close();
}



const Actualizar = async(sala)=>{
        var ActualizarSala = new Salas({
        capacidad:sala.capacidad, //con el string representamos y manipulamos una secuencia de caracteres.
        Direccion:sala.Direccion,
        Precio:sala.Precio,
});

ActualizarSala.findOneByIdAndUpdate(function(err) {
if (err) throw err;
console.log('Dato guardado con exito!!!');

});
}

const addTask = async (sala)=>{
    //La funcion create me permite crear un nuevo objeto dentro de mongoDb
    await Sala.create(sala)
    console.log("Se agregó la sala correctamente")
    await connection.close()
};

// const removeTask =async()=>{
//     await Task.findByIdAndDelete();
//     console.log("Tarea Eliminada")
//     await connection.close();
//     }
// const menuBorrar = async (sala = [])=>{ // menu de items a borrar 
//         // lista las tareas en el apartado de borrar
//           const choices = sala.map( (salas, i) => {
        
//               const idx = `${i + 1}.`.green;
        
//               return {
//                   value: salas,
//                   name:  `${ idx } ${ salas.descripcion } : : agregada el ${'DIA '.cyan} :${salas.fecha}`
//               }
//           });
//           choices.unshift({
//               value: '0',
//               name: '0.'.green + ' Cancelar'
//           });
        
//           const preguntas = [
//               {
//                   type: 'list',
//                   name: 'id',
//                   pageSize: 20,
//                   message: 'Borrar',
//                   choices
//               }
//           ]
//           const { id } = await inquerer.prompt(preguntas);
//           return id.id;
//         };

const listTask= async()=>{
    const tasks = await Salas.find().lean();
    console.table(tasks.map(sala =>({
        _id: sala._id.toString(),
        capacidad: sala.capacidad,
        Precio: sala.Precio,
        Direccion: sala.Direccion,
        Estado: sala.Estado,
    })));
    //Para finalizar una tarea
    await connection.close();
    //llamar desde process que es un objeto de node
    process.exit(0);
};

const ListarSala= async()=>{
    const tasks = await Salas.find().lean();
    console.table(tasks.map(sala =>({
        _id: sala._id.toString(),
        capacidad:sala.capacidad, //con el string representamos y manipulamos una secuencia de caracteres.
        Direccion:sala.Direccion,
        Precio:sala.Precio,
    })));
    //Para finalizar una tarea
    await connection.close();
    //llamar desde process que es un objeto de node
    process.exit(0);
  };

// const removeTask =async()=>{
//     await SalaEvento.findByIdAndDelete ({_id: id})  
//     await connection.close()
// }
//FUNCIONA PARA ELIMINAR UN DOCUMENTO DE FORMA MANUAL
// const removeTask =async(_id)=>{

    

// // FUNCIONA PARA ELIMINAR UN DOCUMENTO DE FORMA MANUAL
// // findOneAndDelete
//    await SalaEvento.findByIdAndDelete((){
//        _id:mongoose.Types.ObjectId('627eed145e941dd4ac43306a')
//    })
// }

// await SalaEvento.findByIdAndDelete('627eed145e941dd4ac43306a')
// console.log("Se elimino correcto");
//     await connection.close()
    
// }

// const removeTask =async(_id)=>{
//     await Salas.findByIdAndDelete(_id);
//     console.log("Tarea Eliminada")
//     await connection.close();
//     }
    
// const updateTask = async(_id)=>{
    

//     await Salas.findByIdAndUpdate(_id);
//     console.log("Dato Actualizado")
//     await connection.close();
// }

module.exports={
    addTask,
    updateTask, 
    Registrar, 
    ListarSala,
    Actualizar
}


// const {prompt}=require ('inquirer')
// const {getNewTask} = require('./')


// require ('colors');
// const moment = require('moment');

// const agg = (async()=>{
//     //llamar a la funcion promp
//     //Un type input de entrada
//      const answers = await prompt(TaksQuestion);
//      getNewTask(answers);})

