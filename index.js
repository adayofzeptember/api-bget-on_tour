const express = require("express");
const dotenv = require('dotenv');
const auth_router = require('./router/auth_router');
const regis_router = require('./router/regis_router');

const db_bewise = require('./db/db_connect')
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/ping', (req, res) => {
    res.send('pong on tour');
});

app.get('/db-test', (req, res) => {
    db_bewise.query('SELECT 1 AS ok', (err, rows) => {
        if (err) {
            console.error('DB TEST ERROR:', err);
            return res.status(500).json({
                ok: false,
                error: err.message
            });
        }

        res.json({
            ok: true,
            result: rows
        });
    });
});

app.use('/auth', auth_router);
app.use('/regis', regis_router);

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`🚀 Server running: port ${PORT}`);
});

