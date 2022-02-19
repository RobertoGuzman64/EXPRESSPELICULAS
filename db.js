
const config = require('./config/config.json');
const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE || config.development.database, 
    process.env.MYSQL_USER || config.development.username, 
    process.env.MYSQL_PASSWORD || config.development.password,
    {
        host: process.env.MYSQL_HOST || config.development.host,
        port: process.env.MYSQL_PORT || config.development.port || '3306',
        dialect: 'mysql',
        operatorAliases: false,
        pool: {
            max: 5,  //número máximo de conexiones en el grupo
            min: 0,  //número minimo de conexiones en el grupo
            acquire: 30000, //tiempo máximo, en milisegundos, que una conexión puede estar inactiva antes de ser liberada
            idle: 10000 // tiempo máximo, en milisegundos, que el grupo intentará obtener la conexión antes de arrojar un error
        },
    }
);

module.exports = sequelize.authenticate()
.then((db)=>{
    console.log('MYSQL conectado'); 
    return db;
});