const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

const apiKey = '';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs');

app.get('/', function (req, res){
    res.render('index', {weather: null, error: null})
}) 

app.listen(3000, function () {
    console.log('wethearly app listening on port 3000;')
})