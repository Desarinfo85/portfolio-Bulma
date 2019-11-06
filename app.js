const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');
const app = express();


// CONTROLLERS

const home = require('./controllers/home');
const Propos = require('./controllers/propos');

// PUBLIC STATIC

app.use('/public', express.static(path.join(__dirname, 'public')))



// ENGINE

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');



//ROUTES

app.get('/', home);

app.get('/propos', Propos);


//SERVEUR

app.listen(3200, console.log('le serveur tourne sur le port 3200'));