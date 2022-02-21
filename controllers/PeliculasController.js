
const { default: axios } = require("axios");
const PeliculasController = {};


//Funciones del controlador

PeliculasController.traePeliculas = (req, res) => {
};
PeliculasController.registraPelicula = (req, res) => {
};

//EJERCICIO 1 Este endpoint tiene que traer los datos de una película si introducimos su número de ID (por ejemplo el número 200)
PeliculasController.peliculasTitulo = async (req, res) => {
    let nombre = req.query.nombre;
    try{
        let resultados = await axios.get(`https://api.themoviedb.org/3/search/company?api_key=210d6a5dd3f16419ce349c9f1b200d6d&query=${nombre}&page=1`)
        res.send(resultados.data);
    }
    catch(error){
        console.log(error);
    }
}
//EJERCICIO 2 Este endpoint tiene que traer las reviews de una película en concreto dado su número de ID
PeliculasController.peliculasID = async (req, res) => {
    let id = req.query.id;
    try{
        let resultados = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`)
        res.send(resultados.data)
    }
    catch(error){
        console.log(error);
    }
}
// EJERCICIO 3 Este endpoint tiene que traer la última película que haya sido registrada en la base de datos
PeliculasController.peliculasReview = async (req, res) => {
    let id = req.query.id;
    try{
        let resultados = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1`)
        res.send(resultados.data)
    }
    catch(error){
        console.log(error);
    }
}
//EJERCICIO 4 Trae las películas con mejor nota por parte de los usuarios en la base de datos
PeliculasController.peliculasTop = async (req, res) => {
    try{
        let resultados = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1`)
        res.send(resultados.data)
    }
    catch(error){
        console.log(error);
    }
}
//EJERCICIO 5 Dado un número de id de una película, trae películas similares a esta
PeliculasController.peliculasSimilares = async (req, res) => {
    try{
        let resultados = await axios.get(`https://api.themoviedb.org/3/movie/19404/similar?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1`)
        res.send(resultados.data)
    }
    catch{
        console.log(error);
    }
}



module.exports = PeliculasController;