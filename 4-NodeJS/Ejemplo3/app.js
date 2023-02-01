const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hola Mundo!');
})

// Ruta con parámetros
// app.get('/:name', (req, res) => {
//     res.send(`Hola ${req.params.name}!`);
// })

app.get('/ejemplojson', (req, res) => {
    res.send({
        nombre: 'Pepe',
        edad: 20,
        aficiones: ['cine', 'pasear']
    });
})

app.listen(port, () => {
    console.log(`Server listening at port ${port}...`);
})