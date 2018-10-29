var express = require('express');
var app = express();
var config = require('./config.json');

app.get('/api', (req, res) => {
    res.json({});
})

port = config.port ? config.port: "3001";

app.listen(port, () => console.log("listening on port " + port));