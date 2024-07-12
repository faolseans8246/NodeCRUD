
const mysql = require('mysql2')
const { createConnection } = require('mysql2')

// DataBase manzilini sozlash
const db = createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "faolseans8246",
    database: "nodejs"
});


// Databazeni ulanishini tekshirish
db.connect((err) => {
    try {
        console.log("Connection soccessfully! ...")
    } 
    catch (err) {
        throw err
    }


    // Jadval yaratish va uni shakllantirish qismi
    const createTableBase = `
        CREATE TABLE IF NOT EXISTS crudusers (
            id INT AUTO_INCREMENT PRIMARY KEY,
            login VARCHAR(100) NOT NULL,
            parol VARCHAR(128) NOT NULL,
            email VARCHAR(150) NOT NULL,
            address VARCHAR(255) NOT NULL,
            year INT NOT NULL,
            description VARCHAR(1000)
        )
    `;

    db.query(createTableBase, (err, result) => {
        if (err) {
            console.error("Do not create table from DataBase", err)
            return;
        }

        console.log("Successfully create table from database!")
    });

});

// Ma'lumotni yuborish
module.exports = db;