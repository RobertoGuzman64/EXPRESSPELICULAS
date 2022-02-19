const { Router } = require('express');
const express = require('express');
const router = express.Router();

const PeliculasController = require('../controllers/PeliculasController');


//CRUD RESTFUL

//Leer todas las peliculas
router.get('/', PeliculasController.traePeliculas);
//http://localhost:3000/peliculas

//Registro de una peli nueva
router.post('/', PeliculasController.registraPelicula);
//http://localhost:3000/peliculas

//Busqueda de peliculas por titulo
router.get('/titulo', PeliculasController.peliculasTitulo);
//http://localhost:3000/titulo

//Traer Peliculas por ID
router.get('/ID', PeliculasController.peliculasID);
//http://localhost:3000/ID

//Traer reviews de Peliculas
router.get('/review', PeliculasController.peliculasReview);
//http://localhost:3000/review



module.exports = router;