const Taskk = require('./admin')
const {connection} = require ('./db');


//NUEVOO
// const Administradores = require ('/Users/ebera/Desktop/Trabajo-Autonomo-Salas/Consola/Cliente')
// const User = require ('/Users/ebera/Desktop/Trabajo-Autonomo-Salas/Consola/Cliente')
// const Administradores = require('./admin');
// const User = require ('./admin')
var {Administradors}= require('../Cliente');
var mongoose = require('mongoose'); 
//Lo añadido
const inquerer = require ('inquirer')
//Creo una funcion de llamar tareas


// const LogiarUsuario = async ()=>{
//     const Logiar = await inquerer.prompt({
//         type: 'input',
//         name: 'nusuario',
//         message: 'Ingrese su usuario'
//     },
//     {
//         type: 'input',
//         name: 'contraseña',
//         message: 'Ingrese su contraseña',
//         validate: function (input) {
//             // Declare function as asynchronous, and save the done callback
//             var done = this.async();
      
//               input = input.trim();// quita los espacios solo para la validacion
              
//               if (input == '') {
//                 // Pass the return value in the done callback
//                 done('You need to provide a description');
//                 return;
//               }
//               // Pass the return value in the done callback
//               done(null, true);
            
//           }
    
    
//     }

//     )
//     //La funcion create me permite crear un nuevo objeto dentro de mongoDb
//     // await Taskk.create(Administradores)
//     // console.log("Administradores Registrado")
//     // await connection.close()

// return Logiar;

// };

const CrearUsuario = async (admin)=>{
    var RegistrarUsuario = new Administradors({
        _id: new mongoose.Types.ObjectId(),
        Celular:admin.Celular, //con el string representamos y manipulamos una secuencia de caracteres.
        Contrasena:admin.Contrasena,
        Correo:admin.Correo,
        nombre:admin.nombre,
        Usuario:admin.Usuario,
});

RegistrarUsuario.save(function(err) {
if (err) throw err;
console.log('Dato guardado con exito!!!');

});
}

const LogiarUsuario = async ( )=>{
 await Taskk.getElementById()
    
    // if(!user){
    //     console.log("No existe");
    // }
    // if (!user.compararPassaword(contraseña)){
    //     console.log('Contraseña Incorrecta');
    // }

}

module.exports = {
    
    CrearUsuario, LogiarUsuario
}