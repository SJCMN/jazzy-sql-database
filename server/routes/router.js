// POOL module
const express = require('express');
const router = express.Router();
const pg = require('pg');

const Pool = pg.Pool;

const pool = new Pool ({
    database: 'jazzy_sql',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 3000
});

pool.on('connect' , () => {
    console.log('PostgreSQL Connected');  
})

pool.on('error', (err) => {
    console.log('PostgreSQL Failed ', err);
})

// artist routes

router.get('/artist', (req, res) => {
    console.log(`In /artist GET`);
    
    let queryText = `
    SELECT * FROM "artist"
    ORDER BY "birthdate" DESC;
    `;
    pool.query(queryText)
    .then((result) =>{
        res.send(result.rows)
    })
    .catch((err) => {
        console.log('Error making post to db', err);
        res.sendStatus(500);
    })

});


router.post('/artist', (req, res) => {
    artistList.push(req.body);
    res.sendStatus(201);
});

// song routes

router.get('/song', (req, res) => {
    console.log(`In /songs GET`);
    res.send(songList);
});

router.post('/song', (req, res) => {
    songList.push(req.body);
    res.sendStatus(201);
});


module.exports = router;