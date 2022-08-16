const express = require('express');
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'mydb'
});

connection.connect();

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(3000, () => {
    console.log('Servidor rodando');
});