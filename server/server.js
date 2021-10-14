const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('server/public'));


// modules to require
let router = require('./routes/router');
app.use('/songs', router);

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});
