//npm install express
const { Router} = require ('express');
//npm install express-validator
const { check } = require ('express-validator');
const {VerReserva}=require('../controllers').Reserva;
const {validarCampos}= require ('../middlewares')

const router =  Router();

//router.get('/id',VerReserva );


module.exports = router;