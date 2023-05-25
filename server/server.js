const express = require('express');
const express = require('pg');

const DB_PASSWORD = process.env.DB_PASSWORD;

const pool = new pg. Pool({
    host: 'db.bit.io',
    port: 5432,
    database: 'jma503/trial',
    user: 'jma503',
    password: DB_PASSWORD
})

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.static('server/public'));
app.use(express.json)

app.listen(PORT, () => {
    console.log('App likes to listen to radio station: ', PORT);
})

app.get('/', (req, res) => {
    console.log('Simple get')
    res.status(200).send();
});

