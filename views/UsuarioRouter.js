
const express = require('express');
const router = express.Router();

const UsuarioController = require('../controllers/UsuarioController');

//CRUD RESTful

//Leer todos los usuarios
router.get('/', UsuarioController.traeUsuarios);
//http://localhost:3000/usuarios

router.get('/:id', UsuarioController.traerUsuarioId);
//http://localhost:3000/:id

router.get('/email/:email', UsuarioController.traerUsuarioEmail);
//http://localhost:3000//email/:email

//Registro
router.post('/', UsuarioController.registraUsuario);
//http://localhost:3000/usuarios

//Modificar datos de un Usuario
router.put('/:id', UsuarioController.updateProfile)

//Borramos todos los Usuarios
router.delete('/', UsuarioController.deleteAll);
//Borramos solo un Usuario
// router.delete('/:id', UsuarioController.deleteById);

//Login
router.post('/login', UsuarioController.logUsuario);
//https://localhost:3000/usuarios/login


module.exports = router;