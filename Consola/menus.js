require('colors');
const moment = require('moment');
const inquerer = require('inquirer');
let resultado = require('./Cliente');
var {Cliente,Tipo_sala,Salas,Empresas,Administradors,Reservas,} = require('./Cliente');
const preguntas =[/* vector de preguntas menu */
    {
      type: "list",
      name: "opciones",
      message: "Puede  iniciar sesion o registrarse en nuestro sistema\n",
      loop : true,
      choices: [
        {
          value: "1",
          name: `${"1.".blue}) Iniciar sesion `,
        },
        {
          value: "2",
          name: `${"2.".blue}) Registrarse `,
        },
       
        {
          value: "0",
          name: `${"0.".red}) SALIR`,
        }
  
      ]
    }
  ];

  const Tipo_Usuario =[/* vector de preguntas menu */
  {
    type: "list",
    name: "opciones",
    message: "Puede  iniciar sesion o registrarse en nuestro sistema\n",
    loop : true,
    choices: [
      {
        value: "1",
        name: `${"1.".blue}) CLIENTE NORMAL `,
      },
      {
        value: "2",
        name: `${"2.".blue}) ADMINISTRADOR `,
      },
     
      {
        value: "3",
        name: `${"3.".blue}) SUPERADMIN`,
      },
     
      {
        value: "4",
        name: `${"4.".red}) REGRESAR`,
      }

    ]
  }
];
  const sesion =[/* vector de preguntas menu */
  {
    name: "credenciales",
    message: "Ingrese credenciales para iniciar sesion\n",
    choices: [
      {
        name: 'Usuario',
        message: 'Ingrese el usuario:',
        default: ''
      },
      {
        name: 'Contraseña',
        message: 'Ingrese una contraseña:',
        default: ''
      },

    ]
  }
];
const sesionSuper =[/* vector de preguntas menu */
{
  name: "credenciales",
  message: "Ingrese credenciales para iniciar sesion\n",
  choices: [
    {
      name: 'Usuario',
      message: 'Ingrese el usuario:',
      default: ''
    },
    {
      name: 'Contraseña',
      message: 'Ingrese una contraseña:',
      default: ''
    },

  ]
}



];

const Registro =[/* vector de preguntas menu */
{
  name: "Datos",
  message: "Ingrese los datos necesarios para la cuenta\n",
  choices: [
    {
      name: 'nombre',
      message: 'Ingrese el Nombre:',
      default: ''
    },
    {
      name: 'Usuario',
      message: 'Ingrese el Usuario:',
      default: ''
    },
    {
      name: 'Celular',
      message: 'Ingrese un numero de celular:',
      default: ''
    },
    {
        name: 'Correo',
        message: 'Ingrese un correo electronico:',
        default: ''
      },
      {
        name: 'Contraseña',
        message: 'Ingrese una Contraseña:',
        default: ''
      },
  ]
}
];
const Menu_cliente =[/* vector de preguntas menu */
    {
      type: "list",
      name: "opciones",
      message: "Bienvenido estas son las opciones que pueden realizar\n",
      loop : true,
      choices: [
        {
          value: "1",
          name: `${"1.".blue}) Buscar salas para alquilar`,
        },
        {
          value: "2",
          name: `${"2.".blue}) Reservar `,
        },
       
        {
          value: "3",
          name: `${"3.".red}) Pagar`,
        },
        {
          value: "4",
          name: `${"4.".red}) Cancelar reserva`,
        },
        {
          value: "5",
          name: `${"5.".red}) CERRAR  SESION`,
        }

  
      ]
    }
  ];
const menu = async()=>{
    console.clear();
    console.log(`${'°°°°°°°°°°°°°°°°°°°°°°°°°°°°°'.brightBlue}`);
    console.log(`   ${'ToDid'.underline} ${'Aplication'.brightBlue}`);
    console.log(`${'°°°°°°°°°°°°°°°°°°°°°°°°°°°°° \n'.blue}`);
    console.log( `Hoy es : `+moment().format('dddd Do MMMM'));
  console.log(`${'-------------------------'.yellow}`);
    const {opciones} = await inquerer.prompt(preguntas)
    
    return opciones

}
const Menucliente = async(usuarios)=>{
  console.clear();
  const {opciones} = await inquerer.prompt([/* vector de preguntas menu */
  {
    type: "list",
    name: "opciones",
    message: `Bienvenido ${usuarios[0].Usuario}\n stas son las opciones que pueden realizar\n`,
    loop : true,
    choices: [
      {
        value: "1",
        name: `${"1.".blue}) Buscar salas para alquilar`,
      },
      {
        value: "2",
        name: `${"2.".blue}) Reservar `,
      },
     
      {
        value: "3",
        name: `${"3.".red}) Pagar`,
      },
      {
        value: "4",
        name: `${"4.".red}) Cancelar reserva`,
      },
      {
        value: "5",
        name: `${"5.".red}) CERRAR  SESION`,
      }


    ]
  }
])

  return opciones

}
const Sesion = async()=>{
  
  const description = await inquerer.prompt([
    {
      name: "Usuario",
      message: "Ingrese el usuario:",
      default: ''
    },
    {
      name: "Contrasena",
      message: "Ingrese una contraseña:",
      default: ''
    },
  ])

  
  return description

}

const Pago = async()=>{
  
  const description = await inquerer.prompt([
    {
      name: "Monto",
      message: "Ingrese el el monto:",
      default: ''
    },
    {
      name: "Tipo_pago",
      message: "Ingrese el tipo de pago:",
      default: ''
    },
  ])

  
  return description

}

const TipoUsuario = async()=>{
  console.clear();
  const {opciones} = await inquerer.prompt(Tipo_Usuario)

  return opciones

}


const Registrar = async()=>{
  
    const description = await inquerer.prompt([
        {
            name: 'nombre',
            message: 'Ingrese el Nombre:',
            default: ''
          },
          {
            name: 'Usuario',
            message: 'Ingrese el Usuario:',
            default: ''
          },
          {
            name: 'Celular',
            message: 'Ingrese un numero de celular:',
            default: ''
          },
          {
              name: 'Correo',
              message: 'Ingrese un correo electronico:',
              default: ''
            },
            {
              name: 'Contrasena',
              message: 'Ingrese una Contraseña:',
              default: ''
            },
    ])
  
    
    return description
  
  }

const pausa = async (mensaje)=>{
  const {pause} = await inquerer.prompt(
      [{type : 'cuestion',
        name : 'pausa',
        message : mensaje          
  
  }])
  return pause;
}


const buscador =[/* vector de preguntas menu */
{
  type: "list",
  name: "opciones",
  message: "Puede  iniciar sesion o registrarse en nuestro sistema\n",
  loop : true,
  choices: [resultado]
}
];

//muestra los tipos de sala
const Buscamos = async (mensaje)=>{
 
  var datas = []; 
  for (i=0; i<mensaje.length; i++){
    datas.push(
      {
        value: `${mensaje[i]._id}`,
        name: `${"1.".blue}) ${mensaje[i].nombre} `,
      }

    );
    
    
    
  }

  //funcion para mostrar en interfaces
  const pause = await inquerer.prompt(
    [{
      type: "list",
      name: "idTipo",
      message: "Puede  iniciar sesion o registrarse en nuestro sistema\n",
      loop : true,
      choices : //muestra el array
        datas
      

}])
return pause;
}

//Buscar y capturar sala
const VerSala = async (mensaje)=>{

var datas = []; 
for (i=0; i<mensaje.length; i++){
  datas.push(
    {
      value: `${mensaje[i]._id}`,
      name: `${"1.".blue}) ${mensaje[i].Direccion} `,
    }

  );
  
  
  
}


const pause = await inquerer.prompt(
    [{
      type: "list",
      name: "idSala",
      message: "Puede  iniciar sesion o registrarse en nuestro sistema\n",
      loop : true,
      choices : 
        datas
      

}])
return pause;
}


const VerReserva = async (mensaje)=>{

var datas = []; 
for (i=0; i<mensaje.length; i++){
  const salas={_id:`${mensaje[i].idSala}`};
  const sala= await Salas.findOne(salas)
  pausa(console.log(sala.idTipo));
 const local={_id:`${sala.idTipo}`};
  pausa(console.log(local));
 const locals= await Tipo_sala.findOne(local)
 
  datas.push(
    {
      value: `${mensaje[i]._id}`,
      name: `${"1.".blue})  ${sala.Direccion}  ${locals.nombre}  `,
    }

  );
  
  
  
}


  const pause = await inquerer.prompt(
      [{
        type: "list",
        name: "idSala",
        message: "Puede  iniciar sesion o registrarse en nuestro sistema\n",
        loop : true,
        choices : 
          datas
        
  
  }])
  return pause;
}




const ListaBuscar= async(salas)=>{
  console.table(salas.map(sala =>({
    nombre: sala.nombre,
    descripcion: sala.descripcion,
    Empresa: sala.Empresa,
      correo: sala.Correo,
      direccion: sala.Direccion
  })));
  //Para finalizar una tarea
  await connection.close();
  //llamar desde process que es un objeto de node
  process.exit(0);
};
module.exports = {menu,TipoUsuario,Sesion,Menucliente,pausa,Registrar,buscador,Buscamos,ListaBuscar,
  VerSala,VerReserva,Pago
 
};