const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/:nombre', (req, res) => {
    const nombreUsuario = req.params.nombre;
    const cuantas = nombreUsuario.length;

    res.render('cuantasletras.ejs', { nombreUsuario: nombreUsuario, cuantas: cuantas });
});

app.post('/animales', (req, res) => {
    const animalFavorito = req.body.animal;
    res.render('animal-favorito.ejs', { animalFavorito: animalFavorito });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000...');
});