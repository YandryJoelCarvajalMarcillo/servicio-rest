//npm install express
const { Router} = require ('express');
//npm install express-validator
const { check } = require ('express-validator');
const {VerCliente,CrearCliente}=require('../controllers').Cliente;
const {validarCampos}= require ('../middlewares')

const router =  Router();
//router.post('/', [check('Direccion', 'La direccion es obligatoria').not().isEmpty(), validarCampos], CrearSala)

router.get('/',VerCliente );
router.post('/',CrearCliente);

module.exports = router;