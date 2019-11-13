
console.log("welcome");
const express = require('express')
const mysql = require('mysql')

function connect() {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'kdac_aug_2019',
        port: 3306
    })

    connection.connect()
    return connection
}

const app = express()



app.listen(4000, () => {
    console.log(`Server started on port 4000`);
});