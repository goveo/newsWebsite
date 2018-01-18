const express = require('express');
const app = express();
const port = process.env.PORT || 2323;
const bodyParser = require('body-parser');
const db = require('./modules/database');
const info = require('./modules/info');
const User = require('./modules/user');
const path = require("path");

app.use(express.static(__dirname + '/../public'));
app.set('public', path.join(__dirname, '/../public'));
app.set('views', path.join(__dirname, '/../views'));
app.set('view engine', 'ejs');


app.get('/login', (req, res) => {
    res.render('login', {
        user: req.user
    }); 
});

app.get('/register', (req, res) => {
    res.render('register', {
        user: req.user
    });
});

app.post('/register', (req, res) => {

})

app.listen(port, (err) => {
    if (err) console.log(err);
    console.log('server on', port);
});

app.get('/', (req, res) => {
    res.render('index', {
        user: req.user
    });
});
