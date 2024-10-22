import mysql from "promise-mysql";
import config from './../config';

// Función para establecer la conexión
const createConnection = async () => {
    try {
        const connection = await mysql.createConnection({
            host: config.host,
            database: config.database,
            user: config.user,
            password: config.password,
            port: config.port
        });
        console.log('Connected to MySQL!');
        return connection;
    } catch (error) {
        console.error('Error connecting to MySQL:', error.message);  // Captura el error
        throw new Error('Error connecting to the database');  // Lanza una excepción para que el controlador también lo capture
    }
};

// Función para obtener la conexión
const getConnection = async () => {
    try {
        const connection = await createConnection();
        return connection;
    } catch (error) {
        console.error('Failed to get the connection:', error.message);
        throw error;  // Se vuelve a lanzar el error para que quien llame esta función también lo capture
    }
};

module.exports = {
    getConnection
};

//DATOS ANTERIORES//
// import mysql from "promise-mysql";
// //const mysql = require ('mysql')
// //const mysql = require('mysql2')
// import config from './../config';



// const connection= mysql.createConnection({
//     host: config.host,
//     database: config.database,
//     user: config.user,
//     password: config.password,
//     port: config.port
// });


// const getConnection = () => 
// {
//     return connection;
// };

// module.exports = {
//     getConnection
// };
