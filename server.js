const express =  require('express');
const cors =  require('cors');
const { dbConnection } = require('./database/config');
class Server {
    constructor(){
        this.app = express.Router();
        this.router = express.Router();
        this.port = process.env.PORT;
        this.paths= {
            salas:
            '/api/salas',
            Cliente:
            '/api/cliente',
        }
        this.conectarBD();
        this.middlewares();
        this.routes();
        //    localhost:3000/v1/salaevento/api/salas
        this.router.use('/v1/salaevento', this.app);
        this._express=  express().use(this.router)
    }
    async conectarBD(){
        await dbConnection();
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        
    }
    routes(){
        this.app.use(this.paths.salas
            , require('./routes/salas') );
            this.app.use(this.paths.Cliente
                , require('./routes/clientes') )
    }
    listen(){
        this._express.listen(this.port, ()=>{
            console.log(`Servidor corriendo en puerto ${this.port}`);
        })
    }
}


module.exports =  Server;