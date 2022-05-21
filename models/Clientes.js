const { Schema, model} = require ('mongoose');

var ClienteSchema = Schema({
    
    nombre:{
        type: String,
        required:[true, `La Nombre  es obligatorio`],
    },
    Usuario:{
        type:String,
        required:[true, `La usuario  es obligatorio`],
    },
    Celular:{
        type:String,
        default: 099999999
    },
    Correo:{ 
        type:String,
        required:[true, `La correo  es obligatorio`],
    
    },
    Contrasena:{
        type:String,
        required:[true, `La contraseña es obligatoria`],
    
    }

});
module.exports = model ('Cliente', ClienteSchema );
