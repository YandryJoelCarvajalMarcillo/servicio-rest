//Requiero el modulo mongoose
const {connect, connection}=require('mongoose')
const connectDB = async ()=>{
    await connect('mongodb+srv://josereyes0215:Teodolinda15@cluster0.frhsy.mongodb.net/Salas_Tarea?retryWrites=true&w=majority')
    //Lo use para comprobar la conexion hacia mongo.
    // console.log("Mongo Connected")
}
connection.on('error', err => console.error(err))

module.exports ={ 
    connectDB,
    connection
}
