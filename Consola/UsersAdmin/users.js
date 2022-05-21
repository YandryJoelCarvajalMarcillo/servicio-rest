//creo una funcion moment y la requiero que me servira para las horas.
const moment = require ('moment');
//Creo una funcion inquirer y requiero inquirer que es una libreria que se usara para este proyecto
const inquirer = require ('inquirer')

//Creo una funcion donde colocarè el listado de preguntas que se le harà al usuario administrador.

const ListaOpciones = [
    {
        type: 'list',
        name: 'opciones',
        message: 'Qué deseas hacer?',
        choices:[
            {
                value: '1',
                name: '1=> Registrate'
            },
            {
                value: '2',
                name: '2=> Iniciar Sesion'
            },
            
        ]

    }
]
//Funcion asincrona
const menux = async ()=>{
    console.log('---------------------------')
    console.log('---------Aplicacion--------')
    console.log('---------------------------')
    //FORMATO PARA IMPRIMIR LA FECHA ACTUAL
    console.log(moment().format('dddd Do MMMM'))
    //Requiero resp de la promesa
    const resp = await inquirer.prompt(ListaOpciones);
    return resp

    }

  
 

module.exports={
    menux, 
    // TaksQuestion
}


// const moment = require ('moment');
// const inquerer = require ('inquirer');

// const preguntas =[
//     {
//         type: "list",
//         name: "opciones",
//         message: "Seleccione algunas de las opciones \n",
//         loop: true,
//         choices:[
//             {
//                 value: "1",
//                 name: `${"1.".blue}) Registrar Sala`,
//             },
//             {
//                 value: "2",
//                 name: `${"2.".blue}) Editar Sala`,
//             },
//             {
//                 value: "3",
//                 name: `${"3.".blue}) Borrar Sala`,
//             },
//             {
//                 value: "0",
//                 name: `${"0.".blue}) SALIR`,
//             }

          
//         ]
//     }
   
// ];

// const menu = async ()=>{
//     console.clear();
//     console.log(`${'°°°°°°°°°°°°°°°°°°°°°°°°°°°°°'.brightBlue}`);
//     console.log(`   ${'ToDid'.underline} ${'Aplication'.brightBlue}`);
//     console.log(`${'°°°°°°°°°°°°°°°°°°°°°°°°°°°°° \n'.blue}`);
//     console.log( `Hoy es : `+moment().format('dddd Do MMMM'));
//   console.log(`${'-------------------------'.yellow}`);
//     const {opciones} = await inquerer.prompt(preguntas)
    
//     return opciones

// }

// const getNewTask = async ()=>{

//     const description = await inquerer.prompt({ 
//       type : 'input',
//       name : 'nombre',
//       message : 'Ingrese el nombre',

//       type : 'input',
//       name : 'description',
//       message : 'Ingrese la Descripción',

//       type : 'input',
//       name : 'precio',
//       message : 'Ingrese el precio',
     
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
//   }
  
//   module.exports = {
//       menu,
//       getNewTask
//   }
