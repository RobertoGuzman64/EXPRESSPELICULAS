const { default: axios } = require("axios");

const PeliculasController = {};


//Funciones del controlador

PeliculasController.traePeliculas = (req, res) => {
};

PeliculasController.registraPelicula = (req, res) => {

};
//EJERCICIO 1
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
//EJERCICIO 2
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
//EJERCICIO 3
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


module.exports = PeliculasController;