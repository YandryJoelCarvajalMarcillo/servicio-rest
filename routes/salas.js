//npm install express
const { Router} = require ('express');
//npm install express-validator
const { check } = require ('express-validator');
const {CrearSala, EditarSala, EliminarSala,prueba} = require ('../controllers').Sala;

const {validarCampos}= require ('../middlewares')

const router =  Router();
//router.post('/', [check('Direccion', 'La direccion es obligatoria').not().isEmpty(), validarCampos], CrearSala)

router.get('/',prueba );

router.put('/:id', [check('id', 'El id no es valido').isMongoId(), validarCampos],EditarSala )

router.delete('/:id', [check('id', 'El id no es valido').isMongoId(), validarCampos], EliminarSala)


module.exports = router;