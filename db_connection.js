var mysql = require('mysql2/promise');

async function connect(){
    const connection = await mysql.createConnection({
        host: process.env.DB_URL,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    });

    connection.connect(function(err) {
        if (err) throw err;      
    }).then( () => {
        connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_DEFAULT_DATABASE};`);
        connection.query(`USE ${process.env.DB_DEFAULT_DATABASE};`);
        console.log("Connected!");
    });

    return connection;
}

module.exports = { connect };
