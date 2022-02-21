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



//Busqueda de peliculas por titulo  //  EJERCICIO 1
router.get('/titulo', PeliculasController.peliculasTitulo);
//http://localhost:3000/peliculas/titulo

//Traer Peliculas por ID  //  EJERCICIO 2
router.get('/ID', PeliculasController.peliculasID);
//http://localhost:3000/peliculas/ID

//Traer ultima pelicula registrada // EJERCICIO 3
router.get('/review', PeliculasController.peliculasReview);
//http://localhost:3000/peliculas/review

//Traer la d mejor puntuación  // EJERCICIO 4
router.get('/top', PeliculasController.peliculasTop);
//http://localhost:3000/peliculas/top

//Traer peliculas similares a la de mejor puntuación  //  EJERCICIO 5
router.get('/similares', PeliculasController.peliculasSimilares);
//http://localhost:3000/peliculas/similares

module.exports = router;