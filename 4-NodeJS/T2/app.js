const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('formulario');
})

app.post('/datos', (req, res) => {
    const nombre = req.body.nombre;
    const edad = req.body.edad;

    res.render('respuesta', { nombre: nombre, edad: edad });
})

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000...');
});