const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.use('/test', require('./routes/testRouter'));

app.listen(3000, function () {
    console.log('App listening on port 3000!')
});

module.exports = app;
