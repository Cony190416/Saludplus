const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Para permitir peticiones desde el frontend

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'micro_usuario'
});

db.connect(err => {
    if (err) throw err;
    console.log('Conectado a la base de datos MySQL');
});

app.post('/registrate', (req, res) => {
    const { username, email, password } = req.body;
    const sql = 'INSERT INTO usuarios (username, email, password) VALUES (?, ?, ?)';
    db.query(sql, [username, email, password], (err, result) => {
        if (err) {
            console.error('Error al registrar usuario:', err);
            return res.status(500).send({ message: 'Error al registrar usuario', error: err });
        }
        res.status(201).send({ message: 'Usuario registrado', userId: result.insertId });
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
