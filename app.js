const express = require('express');
require('dotenv').config();
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')

//Servir contenido statico
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('home', {
        nombres: "Jesús Mayta",
        titulo: "Curso de Node"
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombres: "Jesús Mayta",
        titulo: "Curso de Node"
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombres: "Jesús Mayta",
        titulo: "Curso de Node"
    });
});

app.listen(8080, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
});