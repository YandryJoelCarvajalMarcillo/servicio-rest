//Voy a requerir command
// require ('./helpers/menuu')
// const Taskk = require('./admin')
const { menux, Register,Logiar } = require ("./users");
const {prompt}=require ('inquirer')

//Lo añadido
const inquerer = require ('inquirer')

//Llamar la funcion de la base de datos
const {connectDB} = require ('./db');
const { CrearUsuario } = require("./collection");
async function main(){
    await connectDB();

}
main()

const principal = async() =>{

    //Estrucutra para que no se termine el programa    
    let aux ='';
    // do {
    
        //Una linea de codigo para limpiar la consola
        // console.clear();
        
    
    
    // Constante y objeto para el menu
    const { opciones } = await menux();
    // const newtarea = new Admin();
    aux = opciones;

    //SI SIRVE
    const Logiar=[
        {
            type: 'input',
            message: 'Ingrese Usuario',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Ingrese Contraseña',
            name: 'description'
        }
    
        
    ]

// SI SIRVE
    const Register =[
        {
            type: 'input',
            message: 'Escriba su Nombre y Apellido',
            name: 'nombre'
        },
        {
            type: 'input',
            message: 'Escriba un nombre de usuario',
            name: 'Usuario'
        },
        {
            type: 'input',
            message: 'Digite su numero de telefono',
            name: 'Celular'
        },
        {
            type: 'input',
            message: 'Escriba su correo electronico',
            name: 'Correo'
        },
        {
            type: 'input',
            message: 'Escriba una contraseña',
            name: 'Contrasena'
        }
    ]
    

    
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
             const create = await prompt(Register);           
            CrearUsuario (create);
             break;
             //listar las tareas
                
                
            
            //La funcion create me permite crear un nuevo objeto dentro de mongoDb
            // await Taskk.create(Administradores)
            // console.log("Administradores Registrado")
            // await connection.close()
        
       
            
            

            

            //listar las tareas

            case '2':
                console.log('Complete las inidicaciones');
            

        
            
            
                const answers =await prompt (Logiar);
                LogiarUsuario(answers); 
            // console.log('Complete el formulario');
            // const Logiar = await inquerer.prompt({
            //     type: 'input',
            //     name: 'nusuario',
            //     message: 'Ingrese su usuario'
            // },
            // {
            //     type: 'input',
            //     name: 'contraseña',
            //     message: 'Ingrese su contraseña',
            //     validate: function (input) {
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
            
            
            // }
        
            // )


              
                break;
            }

       
    // const array = lista.traerDataFromDB();
    //    const deleteID = await menuBorrar(array);
    //    const ok = await confirmar(`'¿ Desea ${ 'borrar'.red } la ${'tarea'.green }? '`);
    //    (ok) ? lista.delteData(deleteID) : false
    //    await pausa(`Presione ${'Enter'.green} para Continuar `);
        // const menuBorrar = async (tareas = [])=>{ // menu de items a borrar 
        //         // lista las tareas en el apartado de borrar
        //           const choices = tareas.map( (tarea, i) => {
                
        //               const idx = `${i + 1}.`.green;
                
        //               return {
        //                   value: tarea,
        //                   name:  `${ idx } ${ tarea.descripcion } : : agregada el ${'DIA '.cyan} :${tarea.fecha}`
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
        //         }
        //         const confirmar = async(message) => {// confirmacion para borrar tareas
              
        //           const question = [
        //               {
        //                   type: 'confirm',
        //                   name: 'ok',
        //                   message
        //               }
        //           ];
                
        //           const { ok } = await inquerer.prompt(question);
        //           return ok;
        //         } 
            //borrar tareas
            
            };
    //cierra ciclo
    // } while (aux !=0);

    principal ();

  

