let mysql = require("mysql2");
let connection = mysql.createConnection(
    {
        host : "localhost",
        user : "root",
        password : "root",
        database: "museointernacional"
    });

connection.connect(function(error) {
    if (error) {
        console.log(error);
    } else {
        console.log("Conexión correcta.");
    }
});

const sql = `INSERT INTO museosdueños (nombre, email, telefono, direccion, pais) VALUES 
("Museo de Ciencias Naturales", "info@museodeciencias.es", "914111328", "C. de José Gutiérrez Abascal, 2, 28006 Madrid", "España")`;

// ----EJECUTADOR (TOMA EL SQL DE CUALQUIER CONEXIÓN ARRIBA)----
connection.query(sql, (error, result) => {
    if (error) throw error;
    else console.log(result);
});

// ----CIERRA LA CONEXIÓN---
connection.end();